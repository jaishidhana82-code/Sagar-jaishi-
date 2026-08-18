import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainPricing } from './components/MainPricing';
import { AllServices } from './components/AllServices';
import { OurPromise } from './components/OurPromise';
import { SafetyAndCare } from './components/SafetyAndCare';
import { TeamSection } from './components/TeamSection';
import { CustomerReviews } from './components/CustomerReviews';
import { FaqSection } from './components/FaqSection';
import { BookingSection } from './components/BookingSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { BrochureModal } from './components/BrochureModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Monthly Standard Plan (₹9,999/month)');
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);

  const handleSelectServiceOrPlan = (serviceName: string) => {
    setSelectedService(serviceName);
    const bookingElement = document.getElementById('contact');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGeneralBooking = () => {
    const bookingElement = document.getElementById('contact');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-16 md:pb-0">
      {/* Top sticky navigation with PDF / HTML brochure download trigger */}
      <Navbar 
        onOpenBooking={handleOpenGeneralBooking} 
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenBooking={handleOpenGeneralBooking} 
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* 2. Main Services & Pricing (1 Hr, 2 Hr, ₹9,999 Monthly Plan) */}
        <MainPricing onSelectPlan={handleSelectServiceOrPlan} />

        {/* 3. Additional Services (Daily Exercise, Walking, Grooming, Sitting, etc.) */}
        <AllServices onSelectService={handleSelectServiceOrPlan} />

        {/* 4. Our 8-Point Promise */}
        <OurPromise />

        {/* 5. Safety & Care (5 Pillars) */}
        <SafetyAndCare />

        {/* 6. Meet Our DOG STAR Team (5 Specialists) */}
        <TeamSection />

        {/* 7. Customer Reviews & Ratings */}
        <CustomerReviews />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Interactive Booking Form & Direct Phone Section */}
        <BookingSection 
          selectedServicePreload={selectedService}
          onClearPreload={() => setSelectedService('')}
        />

        {/* 10. Large Final CTA Banner */}
        <FinalCta onOpenBooking={handleOpenGeneralBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBrochure={() => setIsBrochureOpen(true)} />

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingMobileBar onOpenBooking={handleOpenGeneralBooking} />

      {/* Standalone PDF / HTML Brochure Download Modal */}
      <BrochureModal 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
      />
    </div>
  );
}
