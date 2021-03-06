const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId },
    text: { type: String, required: true },
    name: { type: String },
    avatar: { type: String },
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
        },
      },
    ],
    comments: [
      {
        user: { type: Schema.Types.ObjectId },
        text: { type: String, required: true },
        name: { type: String },
        avatar: { type: String },
      },
      { timestamps: true },
    ],
  },
  { timestamps: true }
);

module.exports = Post = mongoose.model('post', PostSchema);
