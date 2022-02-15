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

//@route  GET api/profile/
//@desc   Get all profiles
//@access Public

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate({
      model: 'users',
      path: 'user',
      select: ['name', 'avatar'],
    });
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

//@route  GET api/profile/user/:id
//@desc   Get all profile by user id
//@access Public

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id }).populate({
      model: 'users',
      path: 'user',
      select: ['name', 'avatar'],
    });
    if (!profile) return res.status(400).json({ msg: 'Profile Not Found.' });
    res.json(profile);
  } catch (error) {
    console.error(error);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Profile Not Found' });
    }
    res.status(500).json({ error: error.message });
  }
});

//@route  DELETE api/profile/
//@desc   Delete profile, user & post
//@access Private

router.delete('/', auth, async (req, res) => {
  try {
    //remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
