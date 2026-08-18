import React from 'react';
import { 
  Activity, 
  Footprints, 
  Sparkles, 
  Scissors, 
  Home, 
  CalendarCheck, 
  ArrowUpRight, 
  ShieldAlert, 
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { ADDITIONAL_SERVICES, BUSINESS_PHONE } from '../data/mockData';
import { ServiceItem } from '../types';

interface AllServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const AllServices: React.FC<AllServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5" />;
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'CalendarCheck':
      default:
        return <CalendarCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 text-[#047857] text-[11px] font-black uppercase tracking-widest">
              <span>Full Service Range</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128]">
              More Canine Services
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600">
              Professional, structured and gentle care tailored to your dog’s unique lifestyle and exercise needs.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_PHONE}`}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0A1128] bg-slate-100 hover:bg-[#FFD700] px-6 py-3.5 rounded-full transition-all border border-slate-200 flex-shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Custom Request: {BUSINESS_PHONE}</span>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ADDITIONAL_SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group bg-[#FDFCFB] rounded-[32px] border-2 border-slate-200/80 hover:border-[#FFD700] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />
                  
                  {/* Category icon pill */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-white text-[#0A1128] shadow-md">
                    {getServiceIcon(service.icon)}
                  </div>

                  {/* Price Hint Badge */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#0A1128] text-white">
                      {service.priceHint}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-heading text-lg sm:text-xl font-black uppercase tracking-tight text-[#0A1128] group-hover:text-[#B45309] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Benefits */}
                  <div className="mt-4 pt-4 border-t border-slate-200/70 space-y-2">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3.5 px-4 rounded-full text-xs font-black uppercase tracking-widest bg-white hover:bg-[#0A1128] text-[#0A1128] hover:text-[#FFD700] border-2 border-slate-200 hover:border-[#0A1128] transition-all flex items-center justify-center gap-2"
                >
                  <span>Book This Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Notice */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-[#B45309] flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#0A1128] uppercase tracking-wide">Care & Scope Notice:</span> DOG STAR specializes in physical activity, dog riding, and caring supervision. We do not provide clinical veterinary services; any emergency veterinary care is coordinated directly with licensed veterinarians.
          </div>
        </div>

      </div>
    </section>
  );
};
