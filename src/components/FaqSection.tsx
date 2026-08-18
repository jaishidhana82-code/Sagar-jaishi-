import React, { useState } from 'react';
import { HelpCircle, ChevronDown, PhoneCall } from 'lucide-react';
import { FAQS, BUSINESS_PHONE } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1128] text-[#FFD700] text-[11px] font-black uppercase tracking-widest">
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-600">
            Learn more about dog riding workouts, daily scheduling, safety gear, and pricing.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[28px] bg-[#FDFCFB] border-2 border-slate-200/90 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-black text-base sm:text-lg uppercase tracking-tight text-[#0A1128] hover:text-[#B45309] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#0A1128] text-[#FFD700]' : 'bg-slate-200 text-[#0A1128]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm font-medium text-slate-600 leading-relaxed border-t border-slate-200 bg-white animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Direct Call */}
        <div className="mt-10 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">
          Need custom arrangements?{' '}
          <a href={`tel:${BUSINESS_PHONE}`} className="text-[#0A1128] hover:text-[#B45309] font-black underline inline-flex items-center gap-1">
            <PhoneCall className="w-3 h-3" />
            <span>Call us at {BUSINESS_PHONE}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
