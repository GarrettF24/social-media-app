const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

//@route  GET api/profile/me
//@desc   Get current users profile Route
//@access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', [
      'name',
      'avatar',
    ]);

    if (!profile) res.status(400).json({ msg: 'There is no profile for this user' });
    res.json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//@route  POST api/profile
//@desc   Create or update a user profile
//@access Private

router.post(
  '/',
  [
    auth,
    [
      check('hobbies', 'Hobbies are required').not().isEmpty(),
      check('bio', 'Bio is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.social = {};

    const whiteList = [
      'hobbies',
      'bio',
      'job',
      'location',
      'facebook',
      'instagram',
      'twitter',
      'snapchat',
      'linkedin',
      'youtube',
    ];
    const inputData = Object.keys(req.body);

    for (key of inputData) {
      if (whiteList.includes(key)) {
        if (key === 'hobbies' && typeof req.body.hobbies !== 'undefined') {
          profileFields[key] = req.body.hobbies.split(',');
        } else if (
          [
            'facebook',
            'instagram',
            'twitter',
            'snapchat',
            'linkedin',
            'youtube',
          ].includes(key) &&
          req.body[key]
        ) {
          profileFields.social[key] = req.body[key];
        } else if (req.body[key]) {
          profileFields[key] = req.body[key];
        }
      }
    }

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }
      //Create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
    console.log(profileFields);
  }
);

module.exports = router;

//Build profile object
// const profileFields = {};
// profileFields.user = req.user.id;
// const infoFields = ['hobbies', 'bio', 'job', 'location'];
// const socialFields = [
//   'facebook',
//   'instagram',
//   'twitter',
//   'snapchat',
//   'linkedin',
//   'youtube',
// ];
// infoFields.forEach((field) => {
//   if (req.body[field]) profileFields[field] = req.body[field];
//   if (hobbies)
//     profileFields.hobbies = hobbies.split(',').map((hobby) => hobby.trim());
// });

// profileFields.social = {};
// socialFields.forEach((field) => {
//   if (req.body[field]) profileFields[field] = req.body[field];
// });
