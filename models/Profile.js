const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    hobbies: { type: [String], required: true },
    bio: { type: String, required: true },
    job: { type: String },
    location: { type: String },
    education: [
      {
        school: { type: String },
        markofcompletion: {
          type: String,
          enum: ['Degree', 'Diploma', 'License', 'Certificate'],
          default: 'Degree',
        },
        from: { type: Date },
        to: { type: Date },
      },
    ],
    social: {
      facebook: { type: String },
      instagram: { type: String },
      twitter: { type: String },
      snapchat: { type: String },
      linkedin: { type: String },
      youtube: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
