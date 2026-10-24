// src/pages/BlogPage.jsx
import React, { useState } from 'react';
import { blogPosts } from '../data/blogData';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const categories = ['all', 'AI & Automation', 'Cloud & DevOps', 'Software Engineering'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCat = category === 'all' || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featured = blogPosts[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Insights & Deep Dives</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            The SynXCloud Engineering Publication
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practical playbooks, architectural post-mortems, and benchmarks authored directly by our systems architects and engineering team.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search architecture articles, Kubernetes, LLMs, React 19..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-slate-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm shadow-xl"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold capitalize transition-all ${
                  category === cat
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {cat === 'all' ? 'All Publications' : cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Featured Article Banner */}
      {featured && category === 'all' && !search && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-slate-900 aspect-video lg:aspect-square flex items-center justify-center">
              <img 
                src={featured.image} 
                alt={featured.title} 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "/service_development.png"; }}
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  Featured Publication
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                <Link to={`/blog/${featured.slug}`} className="hover:text-indigo-600 transition-colors">
                  {featured.title}
                </Link>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {featured.excerpt}
              </p>

              {/* Author Strip */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center p-1 border border-indigo-200 shadow-sm flex-shrink-0 overflow-hidden">
                    <img 
                      src={featured.authorImage} 
                      alt={featured.author} 
                      className="w-full h-full object-contain scale-105"
                      onError={(e) => { e.currentTarget.src = "/officialLogo-removebg-preview.png"; }}
                    />
                  </div>
                  <div>
                    <strong className="block text-xs text-slate-900">{featured.author}</strong>
                    <span className="text-[11px] text-slate-400">{featured.authorRole}</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${featured.slug}`}
                  className="pill-btn text-xs py-2.5 px-5"
                >
                  Read Article &rarr;
                </Link>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* 3. 3-Column Articles Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => { e.currentTarget.src = "/service_development.png"; }}
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-0.5 border border-indigo-200 shadow-sm flex-shrink-0 overflow-hidden">
                    <img 
                      src={post.authorImage} 
                      alt={post.author} 
                      className="w-full h-full object-contain scale-105"
                      onError={(e) => { e.currentTarget.src = "/officialLogo-removebg-preview.png"; }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{post.author}</span>
                </div>

                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-base">No articles found matching your query.</p>
          </div>
        )}
      </section>

    </div>
  );
}
