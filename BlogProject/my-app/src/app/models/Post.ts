import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  category: String,
  tags: [String],
  metaTitle: String,
  metaDescription: String,
  slug: String,
  featuredImageUrl: String,
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);