import React, { useState } from 'react';
import { Crown, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { PRICING_PLANS, BUSINESS_PHONE } from '../data/mockData';
import { PricingPlan } from '../types';

interface MainPricingProps {
  onSelectPlan: (planName: string) => void;
}

export const MainPricing: React.FC<MainPricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-[#FDFCFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Bold Typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0A1128] text-[#FFD700] text-[11px] font-black uppercase tracking-widest">
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128]">
            Main Services & Pricing
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-600">
            Clear, honest rates for single rides and all-inclusive daily care routines.
          </p>
        </div>

        {/* Pricing Cards Grid - Styled with Bold Typography Bento theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan: PricingPlan) => {
            const isBestValue = plan.isBestValue;

            return (
              <div
                key={plan.id}
                className={`relative rounded-[32px] p-8 transition-all duration-300 flex flex-col justify-between ${
                  isBestValue
                    ? 'bg-[#FFFBEB] border-2 border-[#FFD700] shadow-xl md:-translate-y-2 order-first md:order-none'
                    : 'bg-white border-2 border-slate-200/80 hover:border-[#FFD700] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Best Value Badge Header */}
                {isBestValue && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="inline-flex items-center gap-1 bg-[#0A1128] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                      <Crown className="w-3 h-3 text-[#FFD700]" />
                      BEST VALUE
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">🐕</div>
                    {!isBestValue && plan.badge && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A1128]">
                    {plan.name}
                  </h3>
                  
                  <p className="text-xs font-medium text-slate-500 mt-1 mb-6">
                    {plan.tagline}
                  </p>

                  {/* Big Bold Price */}
                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <div className={`text-3xl sm:text-4xl font-black tracking-tighter ${isBestValue ? 'text-[#B45309]' : 'text-[#0A1128]'}`}>
                      ₹{plan.price.toLocaleString('en-IN')}
                      <span className="text-xs font-bold uppercase tracking-wider opacity-60 ml-1.5 text-slate-600">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List with bold bullet styling */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      What's Included:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isBestValue ? 'text-[#B45309]' : 'text-[#10B981]'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    id={`select-plan-${plan.id}`}
                    className={`w-full py-4 px-6 rounded-full font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      isBestValue
                        ? 'bg-[#0A1128] hover:bg-black text-[#FFD700] shadow-md hover:shadow-lg'
                        : 'bg-[#0A1128] hover:bg-black text-white'
                    }`}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-3 text-center">
                    <a
                      href={`tel:${BUSINESS_PHONE}`}
                      className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-[#0A1128] inline-flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Questions? Call {BUSINESS_PHONE}</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick Promise Strip in Bold Typography Theme */}
        <div className="mt-12 bg-white rounded-[32px] p-6 sm:p-8 border-2 border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Our Promise</span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 pt-1">
              <span className="text-xs font-black uppercase tracking-wider text-[#0A1128]">★ 5-Star Rated</span>
              <span className="text-xs font-black uppercase tracking-wider text-[#0A1128]">🛡️ Safe Handling</span>
              <span className="text-xs font-black uppercase tracking-wider text-[#0A1128]">🧼 Hygienic Care</span>
              <span className="text-xs font-black uppercase tracking-wider text-[#0A1128]">❤️ Friendly Staff</span>
            </div>
          </div>
          <div className="h-px md:h-12 w-full md:w-px bg-slate-200"></div>
          <div className="text-center md:text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Quick Booking</p>
            <p className="text-xl font-black tracking-tight text-[#0A1128]">{BUSINESS_PHONE}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
