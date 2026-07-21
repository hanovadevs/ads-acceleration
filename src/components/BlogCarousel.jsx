import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, Calendar, ArrowRight } from 'lucide-react';
import { FadeInWhenVisible } from './AnimatedSection';

const POSTS = [
  {
    title: 'The Ultimate Amazon Advertising Playbook: Tactics for Maximum ROI',
    tag: 'Maximum ROI',
    date: '20/03/2026',
    views: '880 views',
    slug: 'ultimate-advertising-playbook',
    desc: 'With high inflation and increasing interest rates, its crucial for marketers to utilize their advertising budgets effectively. To achieve maximum ROI, many are now opting for advanced strategies.',
  },
  {
    title: 'Amazon Advertising Strategies That Deliver Results',
    tag: 'Crazy Sales',
    date: '25/03/2026',
    views: '1028 views',
    slug: 'crazy-sales-strategies',
    desc: 'Ready to kick-start your Amazon advertising campaign? The first step is to determine your budget. However, the amount you should allocate depends heavily on your specific niche and margins.',
  },
  {
    title: 'Unpacking Amazon Sales Strategies for Growth',
    tag: 'Top Secret',
    date: '29/03/2026',
    views: '946 views',
    slug: 'decoding-the-algorithm',
    desc: 'The Amazon marketplace grows increasingly competitive each day, making it crucial to recognize and leverage sales patterns in order to stand apart from rivals by collecting deep data.',
  },
  {
    title: 'A Deep Dive into Controlling High ACoS on Amazon',
    tag: 'Budget Mastery',
    date: '05/04/2026',
    views: '1250 views',
    slug: 'controlling-high-acos',
    desc: 'Struggling with high advertising costs? It is a common pain point for sellers. Here is how you can effectively restructure your campaigns to lower your ACoS while maintaining volume.',
  },
  {
    title: 'Mastering Amazon PPC: Advanced Bidding Strategies',
    tag: 'PPC Optimization',
    date: '10/04/2026',
    views: '1120 views',
    slug: 'advanced-bidding-strategies',
    desc: 'Learn how to leverage dayparting, placement modifiers, and dynamic bid adjustments to maximize conversion volume while suppressing wasted spend on non-converting search queries.',
  },
  {
    title: 'Amazon Listing Optimization for Top Rankings',
    tag: 'SEO Secrets',
    date: '14/04/2026',
    views: '1504 views',
    slug: 'listing-optimization-rankings',
    desc: 'Paid advertising works 3X harder when your organic listing conversion rate is optimized. Explore keyword indexing, high-converting bullet copy, and main image testing tactics.',
  },
];

export default function BlogCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? POSTS.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= POSTS.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <FadeInWhenVisible className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-3">
              EXPERT INSIGHTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Industry News & Playbooks.
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl font-normal">
              Stay ahead of the curve with our latest deep-dives, playbooks, and strategies. Learn how the top 1% of Amazon sellers scale sustainably.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-slate-300 text-slate-800 hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center shadow-xs cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-slate-300 text-slate-800 hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center shadow-xs cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </FadeInWhenVisible>

        {/* Carousel Window with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {POSTS.slice(startIndex, startIndex + 3).map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" />{post.views}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug hover:text-slate-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {post.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
