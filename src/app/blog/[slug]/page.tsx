"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Discover the latest trends shaping the web development landscape, from AI integration to advanced CSS features.",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    category: "Development",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=entropy&auto=format&q=60",
    featured: true
  },
  {
    id: 2,
    title: "SEO Best Practices for Modern Websites",
    excerpt: "Learn how to optimize your website for search engines with the latest SEO strategies and techniques.",
    author: "Mike Chen",
    date: "March 12, 2025",
    category: "Marketing",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=entropy&auto=format&q=60",
    featured: false
  },
  {
    id: 3,
    title: "Creating Stunning UI/UX Designs That Convert",
    excerpt: "Explore the principles of effective UI/UX design and how to create interfaces that drive user engagement.",
    author: "Alex Rodriguez",
    date: "March 10, 2025",
    category: "Design",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop&crop=entropy&auto=format&q=60",
    featured: true
  },
  {
    id: 4,
    title: "E-commerce Development: Building Online Stores That Sell",
    excerpt: "A comprehensive guide to developing successful e-commerce platforms with modern technologies.",
    author: "Sarah Johnson",
    date: "March 8, 2025",
    category: "Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=entropy&auto=format&q=60",
    featured: false
  },
  {
    id: 5,
    title: "Digital Marketing Strategies for Small Businesses",
    excerpt: "Effective marketing techniques that help small businesses compete in the digital marketplace.",
    author: "Mike Chen",
    date: "March 5, 2025",
    category: "Marketing",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop&crop=entropy&auto=format&q=60",
    featured: false
  },
  {
    id: 6,
    title: "Performance Optimization: Making Your Website Lightning Fast",
    excerpt: "Techniques and tools to optimize your website's performance and improve user experience.",
    author: "Alex Rodriguez",
    date: "March 3, 2025",
    category: "Development",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=entropy&auto=format&q=60",
    featured: false
  }
];

const CATEGORIES = ["All", "Development", "Design", "Marketing"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = BLOG_POSTS.filter(post => post.featured);

  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-secondary dark:via-gray-900 dark:to-secondary overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-400 opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay updated with the latest insights, trends, and tips in web development, design, and digital marketing.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <motion.input
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:flex-1 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-secondary/90 focus:ring-2 focus:ring-primary outline-none transition backdrop-blur-md"
            />
            <div className="flex gap-2 flex-wrap justify-center">
              {CATEGORIES.map((category) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "bg-white/90 dark:bg-secondary/90 text-primary border border-gray-200 dark:border-gray-700 backdrop-blur-md"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        {selectedCategory === "All" && searchTerm === "" && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/90 dark:bg-secondary/90 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 backdrop-blur-md hover:shadow-purple-500/25 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded font-semibold">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">By {post.author}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-primary font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                      >
                        Read More →
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* All Posts Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
          </h2>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-300">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/90 dark:bg-secondary/90 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 backdrop-blur-md hover:shadow-purple-500/25 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {post.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">{post.date}</span>
                      <span className="text-primary font-semibold">By {post.author}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </motion.section>

        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 text-center border border-gray-200 dark:border-gray-700 backdrop-blur-md"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights, tips, and trends in web development and digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-secondary/90 focus:ring-2 focus:ring-primary outline-none transition backdrop-blur-md"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}