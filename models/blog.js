const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    post: { type: String, required: true },
    author: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('blog', Blog)