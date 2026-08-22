import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../utils/constants';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-heading text-[#1A2530] mb-4">Post not found</h1>
          <Link to="/blog" className="text-[#D4AF37] hover:text-purple-500 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 bg-white"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          to="/blog"
          className="text-[#D4AF37] hover:text-purple-500 transition-colors inline-flex items-center gap-2 mb-8"
        >
          ← Back to Blog
        </Link>

        <div className="mb-6">
          <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1A2530] mt-2 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>
        </div>

        <div className="aspect-video rounded-xl overflow-hidden mb-8 shadow-md">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-lg">{post.content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;