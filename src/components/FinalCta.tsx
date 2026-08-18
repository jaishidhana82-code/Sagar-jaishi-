import React from 'react';
import { Phone, Calendar, Star } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_PHONE_FORMATTED } from '../data/mockData';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#FFD700] text-[#0A1128] relative overflow-hidden">
      {/* Visual background patterns */}
      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-[#0A1128]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Star Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0A1128] text-white text-[11px] font-black uppercase tracking-widest shadow-md">
          <Star className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
          <span>DOG STAR Standard</span>
        </div>

        {/* Large Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-[#0A1128]">
            “More Than a Ride.<br />
            It’s Care, Love & Happiness.”
          </h2>
          <p className="font-heading text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0A1128] opacity-90 pt-2">
            DOG STAR — Happy Dogs. Happy Owners.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${BUSINESS_PHONE}`}
            id="final-cta-call-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-[#0A1128] hover:bg-black text-[#FFD700] font-black uppercase text-xs sm:text-sm tracking-widest shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#FFD700]" />
            <span>📞 Call: {BUSINESS_PHONE}</span>
          </a>

          <button
            onClick={onOpenBooking}
            id="final-cta-book-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4.5 rounded-full bg-white hover:bg-slate-100 text-[#0A1128] font-black uppercase text-xs sm:text-sm tracking-widest shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#0A1128]" />
            <span>Book Online</span>
          </button>
        </div>

        {/* Status Pill */}
        <div className="pt-2 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-[#0A1128]/80">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>Taking New Bookings Now Across All Areas</span>
        </div>

      </div>
    </section>
  );
};
