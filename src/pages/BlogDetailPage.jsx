// src/pages/BlogDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Clock, ArrowLeft, ArrowRight, Share2, Bookmark, CheckCircle2, Terminal } from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  const related = blogPosts.filter(p => p.id !== post.id);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Article Hero Banner */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          {/* Back navigation */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Engineering Publications</span>
          </Link>

          {/* Article Header */}
          <div className="mb-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {post.category}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                {post.readTime}
              </span>
              <span className="text-xs text-slate-400">&bull; {post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Author Header Strip */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 border-2 border-indigo-400 shadow-sm flex-shrink-0 overflow-hidden">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-full h-full object-contain scale-110"
                  onError={(e) => { e.currentTarget.src = "/officialLogo-removebg-preview.png"; }}
                />
              </div>
              <div>
                <strong className="block text-sm text-white">{post.author}</strong>
                <span className="text-xs text-slate-300">{post.authorRole}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Content + Table of Contents Sidebar */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Body (8 cols) */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
            {/* Banner Image */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 aspect-video mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "/service_development.png"; }}
              />
            </div>

            {/* Paragraphs */}
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {paragraph}
              </p>
            ))}

            {/* Code Callout Box */}
            <div className="my-8 p-6 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-white/10 text-slate-400">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>production-agent-manifest.yaml</span>
              </div>
              <pre>{`apiVersion: synx.cloud/v1alpha1
kind: AutonomousPod
metadata:
  name: enterprise-rag-indexer
spec:
  llm: claude-3-5-sonnet
  vectorStore: pinecone-hybrid
  guardrails:
    piiScrubbing: strict
    slaResponseTimeout: 450ms
  canaryRollout:
    initialWeight: 10%`}</pre>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Tags & Architecture Domains</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </article>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            
            {/* Table of Contents */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Table of Contents
              </h4>
              <ul className="space-y-2.5 text-xs">
                {post.headings.map(h => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors block py-1">
                      &bull; {h.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Author Profile Card */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-md border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 block mb-3">
                Publication Author
              </span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-1 border-2 border-indigo-400 shadow-sm flex-shrink-0 overflow-hidden">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-full h-full object-contain scale-110"
                    onError={(e) => { e.currentTarget.src = "/officialLogo-removebg-preview.png"; }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{post.author}</h4>
                  <p className="text-[11px] text-slate-400">{post.authorRole}</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Technical publications, playbooks, and architectural benchmarks authored by the systems architects and engineering team at SynXCloud Consultancy Services.
              </p>
              <Link 
                to="/about-us" 
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                <span>About SynXCloud</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Related Reading
              </h4>
              <div className="space-y-4">
                {related.map(r => (
                  <Link 
                    key={r.id} 
                    to={`/blog/${r.slug}`}
                    className="block group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-1">
                      {r.category}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
                      {r.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}
