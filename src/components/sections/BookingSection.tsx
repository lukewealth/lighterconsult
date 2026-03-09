"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";

interface BookingFormProps {
  type: "consult" | "travel";
}

export const BookingForm = ({ type }: BookingFormProps) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.06)] relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-50">
        <motion.div 
          className={type === 'travel' ? 'h-full bg-amber' : 'h-full bg-blue-600'}
          initial={{ width: 0 }}
          animate={{ width: `${(step / totalSteps) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {type === "consult" ? "Free Strategy Call" : "Start Your Process"}
          </h2>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
            {type === "consult" ? "Engineering ROI since 2026" : "Start your global journey today"}
          </p>
        </div>
        <span className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-100">
          {step}/{totalSteps}
        </span>
      </div>

      <form className="space-y-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <label className="t-label text-slate-900 flex items-center gap-2">
                  <HelpCircle size={14} className="text-blue-600" />
                  What is your primary goal?
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {(type === "consult" 
                    ? ["Scale E-commerce ROI", "Build Brand Authority", "Lead Generation Pipeline", "Content Engineering"]
                    : ["STUDY", "Work Permit Pathways", "Permanent Residency", "Business Relocation"]
                  ).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full text-left p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-600 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{opt}</span>
                        <ChevronRight size={18} className="text-slate-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="t-label text-slate-400">Full Name*</label>
                  <input type="text" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-600 outline-none transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="t-label text-slate-400">Email Address*</label>
                  <input type="email" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-600 outline-none transition-all shadow-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="t-label text-slate-400">Phone Number*</label>
                  <input type="tel" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-600 outline-none transition-all shadow-sm" placeholder="+234..." />
                </div>
                <div className="space-y-2">
                  <label className="t-label text-slate-400">{type === "consult" ? "Monthly Ad Spend" : "Preferred Timeline"}</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-600 outline-none transition-all shadow-sm appearance-none">
                    {(type === "consult" 
                      ? ["$500 - $2,000", "$2,000 - $10,000", "$10,000+", "Just starting"]
                      : ["ASAP (3 Months)", "6 Months", "12 Months", "Planning Stage"]
                    ).map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-blue-50 border border-blue-100 p-8 rounded-[32px] text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-blue-100">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 uppercase">Ready for Assessment</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Our {type === 'consult' ? 'strategists' : 'experts'} will review your data and contact you within 24 hours with a custom roadmap.
                </p>
                <div className="space-y-2 text-left">
                  <label className="t-label text-slate-400">Additional Goals (Optional)</label>
                  <textarea rows={3} className="w-full bg-white border border-blue-100 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-600 outline-none transition-all resize-none shadow-sm" placeholder="Tell us more..." />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-4 pt-4">
          {step > 1 && (
            <button 
              type="button" 
              className="flex-1 t-label text-slate-400 hover:text-slate-900 transition-colors py-4 font-black"
              onClick={() => setStep(s => s - 1)}
            >
              ← Back
            </button>
          )}
          <Button 
            type="button" 
            variant="primary" 
            className={cn(
              "flex-[2] rounded-2xl py-6 font-black shadow-xl",
              type === 'travel' ? 'bg-amber shadow-amber-100' : 'bg-blue-600 shadow-blue-100'
            )}
            onClick={() => {
              if (step < totalSteps) setStep(s => s + 1);
              else alert("Thank you! Our experts will contact you shortly.");
            }}
          >
            {step === totalSteps ? "Finish & Submit" : "Continue Step →"}
          </Button>
        </div>
      </form>
    </div>
  );
};
