"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    title: "How to Scale Your E-commerce Brand in 2026",
    excerpt: "Discover the latest trends in audience segmentation and conversion tracking that are driving 4.5x ROI for our clients.",
    category: "Marketing",
    date: "March 1, 2026",
    author: "LiGHTER Team",
    image: "/assets/portfolio/flyer-digital.png"
  },
  {
    title: "Navigating Canada's New Express Entry Rules",
    excerpt: "Everything you need to know about the latest changes in skilled worker relocation pathways to Ontario and beyond.",
    category: "Immigration",
    date: "Feb 24, 2026",
    author: "Travel Desk",
    image: "/assets/travel/canada.png"
  },
  {
    title: "The Power of Short-Form Video for B2B Brands",
    excerpt: "Why LinkedIn and TikTok are becoming the primary lead generation platforms for professional services.",
    category: "Social Media",
    date: "Feb 18, 2026",
    author: "Creative Dept",
    image: "/assets/portfolio/smm-showcase.png"
  }
];

export const BlogUI = () => {
  return (
    <>
      <Navbar />
      
      {/* Blog Hero */}
      <section className="pt-40 pb-24 px-6 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-600 opacity-20" />
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <span className="t-label text-blue-600 mb-6 block tracking-[4px]">INSIGHTS & NEWS</span>
            <h1 className="t-display text-slate-900 mb-8 md:text-8xl">Expert<br/><span className="text-blue-600 italic font-serif">Perspectives.</span></h1>
            
            <div className="max-w-[600px] relative mt-12">
               <input 
                 type="text" 
                 placeholder="Search for insights..." 
                 className="w-full bg-white border border-slate-200 rounded-2xl px-12 py-5 text-slate-900 focus:outline-none focus:border-blue-600 shadow-xl shadow-slate-200/50 transition-all"
               />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <article className="group cursor-pointer">
                  <div className="aspect-[16/10] bg-slate-100 rounded-[32px] overflow-hidden mb-8 relative border border-slate-100 shadow-lg">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-6 left-6">
                       <span className="bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                         {post.category}
                       </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} className="text-blue-600" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={12} className="text-blue-600" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-24 text-center">
             <Button variant="secondary" className="rounded-2xl px-12 border-slate-200 text-slate-900">Load More Insights</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="py-24 px-6 bg-blue-600 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('/assets/hero/slide-1.png')] bg-cover bg-center grayscale" />
         <div className="max-w-[800px] mx-auto text-center relative z-10">
            <ScrollReveal>
               <h2 className="t-h1 text-white mb-6">Stay Ahead of the Curve</h2>
               <p className="text-blue-100 mb-10 font-medium">Join 2,000+ business owners receiving weekly digital growth and immigration updates.</p>
               <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-[2] bg-white rounded-2xl px-8 py-5 text-slate-900 focus:outline-none"
                  />
                  <Button variant="primary" className="flex-1 bg-slate-900 text-white border-none shadow-none rounded-2xl text-white font-black">Subscribe</Button>
               </form>
            </ScrollReveal>
         </div>
      </section>

      <Footer />
    </>
  );
};
