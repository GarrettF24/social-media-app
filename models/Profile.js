const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
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
        current: { type: Boolean, default: false },
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
