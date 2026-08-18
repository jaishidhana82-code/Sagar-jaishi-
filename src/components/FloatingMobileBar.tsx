import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_PHONE } from '../data/mockData';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#FDFCFB]/95 backdrop-blur-md border-t-2 border-slate-200 shadow-2xl md:hidden">
      <div className="flex items-center gap-3">
        <a
          href={`tel:${BUSINESS_PHONE}`}
          className="flex-1 py-3.5 px-4 rounded-full bg-[#0A1128] text-white font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#FFD700]" />
          <span>Call 7387926046</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-3.5 px-4 rounded-full bg-[#FFD700] text-[#0A1128] font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 text-[#0A1128]" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};
