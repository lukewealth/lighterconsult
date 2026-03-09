"use client";

import { useState } from "react";
import { Check, ArrowRight, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const globalPlans = [
  {
    id: "basic",
    name: "BASIC",
    subtitle: "Essential",
    price: "499",
    currency: "USD",
    description: "Perfect for startups and individuals looking to establish a professional presence.",
    features: [
      "1 Social Media Platform",
      "16 Posts Monthly",
      "2 Hrs Engagement Daily",
      "Ads Management",
      "Ads Budget Integration",
      "Monthly Growth Report"
    ],
    color: "bg-blue-600",
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    subtitle: "Most Popular",
    price: "1,999",
    currency: "USD",
    description: "Comprehensive management for growing brands that need dominance.",
    features: [
      "3 Social Media Platforms",
      "20 Posts Monthly",
      "4 Hrs Engagement Daily",
      "Full Content Creation",
      "Holiday Graphics",
      "Account Optimization",
      "Ads Management + Budget",
      "Weekly Strategic Review"
    ],
    color: "bg-amber",
    featured: true,
  },
  {
    id: "business",
    name: "BUSINESS",
    subtitle: "Enterprise",
    price: "3,999",
    currency: "USD",
    description: "The ultimate digital powerhouse solution for market leaders.",
    features: [
      "5 Social Media Platforms",
      "20 Posts Monthly",
      "24/7 Engagement Coverage",
      "1 Commercial Monthly",
      "Holiday Posts & Campaigns",
      "Advanced Account Optimization",
      "Full Ads Management",
      "Dedicated Strategist",
      "Real-time ROI Tracking"
    ],
    color: "bg-slate-900",
  },
];

const nigeriaPlans = [
  {
    id: "basic-ng",
    name: "BASIC",
    subtitle: "Essential",
    price: "150,000",
    currency: "NGN",
    description: "Built for Nigerian entrepreneurs starting their digital journey.",
    features: [
      "1 Social Media Platform",
      "16 Posts Monthly",
      "2 Hrs Engagement Daily",
      "Ads Management",
      "Ads Budget Integration",
      "Monthly Growth Report"
    ],
    color: "bg-blue-600",
  },
  {
    id: "professional-ng",
    name: "PROFESSIONAL",
    subtitle: "Most Popular",
    price: "450,000",
    currency: "NGN",
    description: "Dominance for growing Nigerian businesses and agencies.",
    features: [
      "3 Social Media Platforms",
      "20 Posts Monthly",
      "4 Hrs Engagement Daily",
      "Full Content Creation",
      "Holiday Graphics",
      "Account Optimization",
      "Ads Management + Budget",
      "Weekly Strategic Review"
    ],
    color: "bg-amber",
    featured: true,
  },
  {
    id: "business-ng",
    name: "BUSINESS",
    subtitle: "Enterprise",
    price: "1,200,000",
    currency: "NGN",
    description: "The ultimate scale solution for leading Nigerian corporations.",
    features: [
      "5 Social Media Platforms",
      "20 Posts Monthly",
      "24/7 Engagement Coverage",
      "1 Commercial Monthly",
      "Holiday Posts & Campaigns",
      "Advanced Account Optimization",
      "Full Ads Management",
      "Dedicated Strategist",
      "Real-time ROI Tracking"
    ],
    color: "bg-slate-900",
  },
];

export const PricingSection = () => {
  const [region, setRegion] = useState<'International' | 'Nigeria'>('Nigeria');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<typeof globalPlans[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const plans = region === 'International' ? globalPlans : nigeriaPlans;

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      company: formData.get('company'),
      product: formData.get('product'),
      plan: selectedPlan?.name,
      price: selectedPlan?.price,
      currency: selectedPlan?.currency,
    };

    try {
      const res = await fetch('/api/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (res.ok) setFormStatus('success');
      else setFormStatus('error');
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden" id="pricing">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-blue-50/50 -skew-y-3 origin-top-left -z-10" />
      
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="t-display text-blue-600 mb-4 opacity-10 select-none">Pricing 2026</h2>
          <h3 className="t-h1 -mt-12 mb-6">Choose Your Growth Path</h3>
          
          {/* Region Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="bg-slate-100 p-1 rounded-2xl flex items-center relative">
              <button 
                onClick={() => setRegion('Nigeria')}
                className={cn(
                  "px-8 py-3 rounded-xl text-xs font-black transition-all relative z-10",
                  region === 'Nigeria' ? "text-white" : "text-slate-400 hover:text-slate-600"
                )}
              >
                NIGERIA PLAN
              </button>
              <button 
                onClick={() => setRegion('International')}
                className={cn(
                  "px-8 py-3 rounded-xl text-xs font-black transition-all relative z-10",
                  region === 'International' ? "text-white" : "text-slate-400 hover:text-slate-600"
                )}
              >
                INTERNATIONAL PLAN
              </button>
              <motion.div 
                className="absolute top-1 bottom-1 bg-blue-600 rounded-xl shadow-lg shadow-blue-100"
                initial={false}
                animate={{ 
                  left: region === 'Nigeria' ? 4 : '50%',
                  right: region === 'Nigeria' ? '50%' : 4
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-16">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              layout
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={cn(
                "relative group transition-all duration-500",
                hoveredPlan === plan.id ? "z-20 scale-105" : "z-10"
              )}
            >
              <div className={cn(
                "absolute -top-4 left-1/2 -translate-x-1/2 px-8 py-2 rounded-lg text-white font-black text-sm tracking-widest skew-x-[-10deg] transition-all duration-500 shadow-lg",
                plan.featured ? "bg-white text-amber" : plan.color
              )}>
                {plan.name}
              </div>

              <div className={cn(
                "bg-white pt-12 pb-8 px-8 rounded-[40px] border transition-all duration-500",
                plan.featured ? "border-amber shadow-2xl shadow-amber-100 bg-amber text-white" : "border-slate-100 shadow-xl",
                hoveredPlan === plan.id && !plan.featured && "border-blue-200 shadow-2xl"
              )}>
                <div className="text-center mb-8">
                  <p className={cn("text-xs font-bold uppercase tracking-tighter mb-2", plan.featured ? "text-amber-100" : "text-blue-600")}>
                    {plan.subtitle}
                  </p>
                  <div className="flex justify-center items-start">
                    <span className="text-2xl font-bold mt-2">{plan.currency === 'NGN' ? '₦' : '$'}</span>
                    <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                  </div>
                  <span className={cn("text-[10px] font-bold opacity-60", plan.featured ? "text-white" : "text-slate-400")}>/month</span>
                </div>

                <p className={cn("text-sm text-center mb-8 h-12 flex items-center justify-center font-medium", plan.featured ? "text-white" : "text-slate-500")}>
                  {plan.description}
                </p>

                <div className="border-t border-white/10 pt-6 mt-6">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 shadow-sm", plan.featured ? "bg-white text-amber" : "bg-blue-50 text-blue-600")}>
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className={cn("text-[11px] font-black uppercase tracking-widest", plan.featured ? "text-white" : "text-slate-700")}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={() => setSelectedPlan(plan)}
                  className={cn(
                    "w-full rounded-2xl font-black py-6 group/btn transition-all duration-300",
                    plan.featured ? "bg-white text-amber border-none hover:bg-amber-50 shadow-none" : "bg-blue-600 text-white shadow-blue-100 border-none"
                  )}
                >
                  <span className="flex items-center gap-2 text-inherit">
                    SELECT {plan.name} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
            {region === 'International' ? 'All prices are in USD.' : 'All prices are in NGN.'} <span className="text-blue-600 underline cursor-pointer hover:text-amber transition-colors">Currency conversion applied at checkout.</span>
          </p>
        </div>
      </div>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-[500px] rounded-[40px] shadow-2xl relative overflow-hidden p-10 md:p-12"
            >
              <button onClick={() => setSelectedPlan(null)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors">
                <X size={24} />
              </button>

              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check size={40} />
                  </div>
                  <h3 className="t-h2 text-slate-900 mb-4">Request Received!</h3>
                  <p className="text-slate-500 mb-8">
                    We&apos;ve sent a professional quote and payment instructions to your email. Please check your inbox (and spam folder).
                  </p>
                  <Button onClick={() => { setSelectedPlan(null); setFormStatus('idle'); }} className="w-full rounded-2xl bg-slate-900 text-white border-none">
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <span className="t-label text-blue-600 mb-2 block">SECURE BOOKING</span>
                    <h3 className="text-3xl font-black text-slate-900 m-0 flex items-center gap-2">
                      Finalize {selectedPlan.name} <ChevronRight size={24} className="text-slate-200" />
                    </h3>
                    <p className="text-slate-500 mt-2">Cost Estimate: <span className="text-slate-900 font-bold">{selectedPlan.currency === 'NGN' ? '₦' : '$'}{selectedPlan.price}</span>/month</p>
                  </div>

                  <form onSubmit={handleSubmission} className="space-y-6">
                    <div className="space-y-2">
                      <label className="t-label text-slate-400 text-[10px]">Your Professional Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required 
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-600 outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="t-label text-slate-400 text-[10px]">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        required 
                        placeholder="Acme Corp"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-600 outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="t-label text-slate-400 text-[10px]">Product / Service Details</label>
                      <textarea 
                        name="product"
                        required 
                        rows={3}
                        placeholder="What do you sell or provide?"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-600 outline-none transition-all resize-none" 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full rounded-2xl py-6 bg-blue-600 text-white font-black border-none shadow-xl shadow-blue-100 mt-4 disabled:opacity-50"
                    >
                      {isSubmitting ? "PROCESSING..." : "GET SECURE PAYMENT LINK"}
                    </Button>
                    
                    {formStatus === 'error' && (
                      <p className="text-red-500 text-xs font-bold text-center mt-2">Error sending request. Please try again.</p>
                    )}
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
