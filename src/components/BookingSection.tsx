import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  Clock, 
  User, 
  Dog, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  ShieldCheck,
  Send,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_PHONE_FORMATTED } from '../data/mockData';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  selectedServicePreload?: string;
  onClearPreload?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ 
  selectedServicePreload,
  onClearPreload 
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    phoneNumber: '',
    dogName: '',
    dogBreed: '',
    service: 'Monthly Standard Plan (₹9,999/month)',
    preferredDate: '',
    preferredTime: 'Morning (07:00 AM - 09:00 AM)',
    address: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<BookingFormData | null>(null);

  useEffect(() => {
    if (selectedServicePreload) {
      setFormData(prev => ({
        ...prev,
        service: selectedServicePreload
      }));
    }
  }, [selectedServicePreload]);

  const todayDateStr = new Date().toISOString().split('T')[0];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedBooking({ ...formData });
      if (onClearPreload) onClearPreload();
    }, 800);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      customerName: '',
      phoneNumber: '',
      dogName: '',
      dogBreed: '',
      service: '1 Hour Dog Riding (₹150)',
      preferredDate: '',
      preferredTime: 'Morning (07:00 AM - 09:00 AM)',
      address: '',
      additionalNotes: ''
    });
  };

  const generateWhatsAppMessage = () => {
    if (!submittedBooking) return '';
    const text = encodeURIComponent(
      `Hello DOG STAR team! I just booked a session for ${submittedBooking.dogName} (${submittedBooking.dogBreed}).\n` +
      `Service: ${submittedBooking.service}\n` +
      `Slot: ${submittedBooking.preferredDate || 'Earliest'} at ${submittedBooking.preferredTime}\n` +
      `Address: ${submittedBooking.address}\n` +
      `Owner: ${submittedBooking.customerName} (${submittedBooking.phoneNumber})`
    );
    return `https://wa.me/91${BUSINESS_PHONE}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#FDFCFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Booking Bento Box styled in Bold Typography #0A1128 */}
        <div className="bg-[#0A1128] rounded-[40px] p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden shadow-2xl border-2 border-slate-800">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FFD700] text-[11px] font-black uppercase tracking-widest border border-white/15">
              <span>Fast Booking</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Ready to Make Your Dog a DOG STAR?
            </h2>
            <p className="text-sm sm:text-base font-normal text-white/80">
              Submit your preferred time slot below or call directly at <strong className="text-[#FFD700]">{BUSINESS_PHONE_FORMATTED}</strong>.
            </p>

            {/* Quick Phone Call Pill */}
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_PHONE}`}
                id="booking-call-cta"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FFD700] hover:bg-[#ffe033] text-[#0A1128] font-black uppercase text-xs sm:text-sm tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#FFD700]/20"
              >
                <Phone className="w-4 h-4 text-[#0A1128]" />
                <span>Call Now: {BUSINESS_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Form / Confirmation Box */}
          <div className="max-w-3xl mx-auto">
            {submittedBooking ? (
              <div className="text-center py-8 space-y-6 animate-in fade-in">
                <div className="w-16 h-16 bg-[#10B981]/20 border-2 border-[#10B981] rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                    Booking Request Sent!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto">
                    Thank you, <strong className="text-[#FFD700]">{submittedBooking.customerName}</strong>! Our DOG STAR team will call you at <strong className="text-white">{submittedBooking.phoneNumber}</strong> shortly to confirm the handler for <strong className="text-[#FFD700]">{submittedBooking.dogName}</strong>.
                  </p>
                </div>

                {/* Summary */}
                <div className="max-w-md mx-auto p-6 rounded-[28px] bg-white/5 border border-white/10 text-left space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between border-b border-white/10 pb-2 font-medium">
                    <span className="text-slate-400 uppercase tracking-wider text-[10px]">Service</span>
                    <span className="font-black text-white">{submittedBooking.service}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2 font-medium">
                    <span className="text-slate-400 uppercase tracking-wider text-[10px]">Dog</span>
                    <span className="font-black text-white">{submittedBooking.dogName} ({submittedBooking.dogBreed})</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2 font-medium">
                    <span className="text-slate-400 uppercase tracking-wider text-[10px]">Slot</span>
                    <span className="font-black text-white">{submittedBooking.preferredDate || 'Earliest'} • {submittedBooking.preferredTime}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span className="text-slate-400 uppercase tracking-wider text-[10px]">Address</span>
                    <span className="font-bold text-white text-right max-w-[200px] truncate">{submittedBooking.address}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#10B981] hover:bg-emerald-600 text-white font-black uppercase text-xs tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Confirmation</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_PHONE}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFD700] text-[#0A1128] font-black uppercase text-xs tracking-wider"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {BUSINESS_PHONE}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-black uppercase text-xs tracking-wider"
                  >
                    Book Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Customer Name */}
                  <div>
                    <label htmlFor="customerName" className="block text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2 flex items-center gap-1.5">
                      <User className="w-3 h-3 text-[#FFD700]" />
                      <span>Customer Name *</span>
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      required
                      value={formData.customerName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2 flex items-center gap-1.5">
                      <Phone className="w-3 h-3 text-[#FFD700]" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit mobile number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Dog Name */}
                  <div>
                    <label htmlFor="dogName" className="block text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2 flex items-center gap-1.5">
                      <Dog className="w-3 h-3 text-[#FFD700]" />
                      <span>Dog's Name *</span>
                    </label>
                    <input
                      type="text"
                      id="dogName"
                      name="dogName"
                      required
                      value={formData.dogName}
                      onChange={handleInputChange}
                      placeholder="e.g. Simba"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Dog Breed */}
                  <div>
                    <label htmlFor="dogBreed" className="block text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2 flex items-center gap-1.5">
                      <Dog className="w-3 h-3 text-[#FFD700]" />
                      <span>Dog Breed *</span>
                    </label>
                    <input
                      type="text"
                      id="dogBreed"
                      name="dogBreed"
                      required
                      value={formData.dogBreed}
                      onChange={handleInputChange}
                      placeholder="e.g. Golden Retriever"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div className="md:col-span-2">
                    <label htmlFor="service" className="block text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2">
                      Selected Service / Plan *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#0A1128] border-2 border-white/20 text-white text-sm focus:border-[#FFD700] focus:outline-none transition-colors"
                    >
                      <option value="1 Hour Dog Riding (₹150)">🐕 1 Hour Dog Riding — ₹150 (Supervised Riding & Walking)</option>
                      <option value="2 Hours Dog Riding (₹300)">🐕 2 Hours Dog Riding — ₹300 (Extended Outdoor Activity)</option>
                      <option value="Monthly Standard Plan (₹9,999/month)">🌟 Monthly Standard Plan — ₹9,999 / mo (3 Sessions/Day • BEST VALUE)</option>
                      <option value="Daily Dog Exercise">⚡ Daily Dog Exercise</option>
                      <option value="Dog Walking">🐾 Neighborhood Dog Walking</option>
                      <option value="Play & Activity Time">🎾 Play & Activity Time</option>
                      <option value="Basic Grooming Care">🧼 Basic Grooming Care</option>
                      <option value="Pet Sitting">🏡 Pet Sitting</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#FFD700]" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      min={todayDateStr}
                      required
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/20 text-white text-sm focus:border-[#FFD700] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#FFD700]" />
                      <span>Preferred Slot *</span>
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#0A1128] border-2 border-white/20 text-white text-sm focus:border-[#FFD700] focus:outline-none transition-colors"
                    >
                      <option value="Early Morning (06:00 AM - 08:00 AM)">Early Morning (06:00 AM - 08:00 AM)</option>
                      <option value="Morning (08:00 AM - 10:30 AM)">Morning (08:00 AM - 10:30 AM)</option>
                      <option value="Afternoon (01:00 PM - 03:00 PM)">Afternoon (01:00 PM - 03:00 PM)</option>
                      <option value="Evening (04:30 PM - 07:00 PM)">Evening (04:30 PM - 07:00 PM)</option>
                      <option value="Night (07:30 PM - 09:30 PM)">Night (07:30 PM - 09:30 PM)</option>
                      <option value="All 3 Daily Slots (For Monthly Plan)">All 3 Daily Slots (For Monthly Plan)</option>
                    </select>
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#FFD700]" />
                      <span>Pickup Address *</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Building, Society, Flat No., Street, Area"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:border-[#FFD700] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Notes */}
                  <div className="md:col-span-2">
                    <label htmlFor="additionalNotes" className="block text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2 flex items-center gap-1.5">
                      <FileText className="w-3 h-3 text-[#FFD700]" />
                      <span>Additional Notes</span>
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Temperament, special instructions, favorite routes..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-slate-400 text-sm focus:border-[#FFD700] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                    <span>No advance payment needed. Verified booking confirmation.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-booking-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#FFD700] hover:bg-[#ffe033] text-[#0A1128] font-black uppercase text-xs sm:text-sm tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#FFD700]/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Submit Booking</span>
                        <Send className="w-4 h-4 text-[#0A1128]" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
