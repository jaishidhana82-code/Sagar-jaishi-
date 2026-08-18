import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus } from 'lucide-react';
import { DEMO_REVIEWS } from '../data/mockData';
import { CustomerReview } from '../types';

export const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(DEMO_REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    ownerName: '',
    dogName: '',
    dogBreed: '',
    rating: 5,
    serviceUsed: '1 Hour Dog Riding (₹150)',
    comment: ''
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.ownerName || !newReview.comment) return;

    const added: CustomerReview = {
      id: `rev-${Date.now()}`,
      ownerName: newReview.ownerName,
      dogName: newReview.dogName || 'My Dog',
      dogBreed: newReview.dogBreed || 'Companion',
      rating: newReview.rating,
      date: 'Just now',
      serviceUsed: newReview.serviceUsed,
      comment: newReview.comment,
      verified: true,
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    };

    setReviews([added, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowReviewModal(false);
      setNewReview({
        ownerName: '',
        dogName: '',
        dogBreed: '',
        rating: 5,
        serviceUsed: '1 Hour Dog Riding (₹150)',
        comment: ''
      });
    }, 1500);
  };

  return (
    <section id="reviews" className="py-20 bg-[#FDFCFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1128] text-[#FFD700] text-[11px] font-black uppercase tracking-widest">
              <span>Customer Feedback</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1128]">
              Customer Reviews
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600">
              Honest demo reviews reflecting the active happiness and peace of mind DOG STAR delivers.
            </p>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0A1128] text-white hover:bg-black text-xs font-black uppercase tracking-wider transition-all shadow-md flex-shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#FFD700]" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Aggregate Ratings Overview Banner */}
        <div className="p-6 sm:p-8 rounded-[32px] bg-white border-2 border-slate-200 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center shadow-sm">
          <div className="flex items-center gap-4">
            <div className="text-4xl sm:text-5xl font-black font-heading text-[#0A1128]">5.0</div>
            <div>
              <div className="flex text-[#FFD700] text-lg">★★★★★</div>
              <div className="text-xs font-black uppercase tracking-wider text-slate-500 mt-0.5">Top-Rated Care</div>
            </div>
          </div>

          <div className="text-xs font-semibold text-slate-600 sm:border-l sm:border-r border-slate-200 sm:px-6">
            <span className="font-black text-[#0A1128] uppercase">100% Supervised:</span> Verified on-time arrival and daily photo dispatch.
          </div>

          <div className="text-xs font-black uppercase tracking-widest text-[#047857] flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>Sample Verified Feedback</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-[32px] bg-white border-2 border-slate-200 hover:border-[#FFD700] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={rev.avatarUrl}
                      alt={rev.ownerName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#0A1128]"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-base font-black uppercase tracking-tight text-[#0A1128]">
                          {rev.ownerName}
                        </h3>
                        {rev.verified && (
                          <span className="text-[9px] font-black uppercase tracking-widest text-[#047857] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-bold text-[#B45309]">
                        {rev.dogName} ({rev.dogBreed})
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[#FFD700] text-sm tracking-widest">★★★★★</div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">
                      {rev.date}
                    </span>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[#0A1128] text-[10px] font-black uppercase tracking-wider mb-4">
                  {rev.serviceUsed}
                </div>

                {/* Comment Text */}
                <p className="text-sm font-medium text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-[#047857] font-black uppercase text-[10px] tracking-wider">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>DOG STAR Care Standard</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1128]/70 backdrop-blur-xs">
          <div className="bg-white rounded-[36px] max-w-lg w-full p-8 shadow-2xl border-2 border-[#0A1128] relative">
            <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-[#0A1128] mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-6">
              Tell other dog owners about your session with DOG STAR.
            </p>

            {submittedMessage ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-black text-lg uppercase text-[#0A1128]">Review Posted!</h4>
                <p className="text-xs text-slate-600 font-medium">Thank you for sharing your experience.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#0A1128] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.ownerName}
                    onChange={(e) => setNewReview({ ...newReview, ownerName: e.target.value })}
                    placeholder="e.g. Rahul S."
                    className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 text-sm focus:border-[#0A1128] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#0A1128] mb-1.5">
                      Dog's Name
                    </label>
                    <input
                      type="text"
                      value={newReview.dogName}
                      onChange={(e) => setNewReview({ ...newReview, dogName: e.target.value })}
                      placeholder="e.g. Simba"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 text-sm focus:border-[#0A1128] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#0A1128] mb-1.5">
                      Dog Breed
                    </label>
                    <input
                      type="text"
                      value={newReview.dogBreed}
                      onChange={(e) => setNewReview({ ...newReview, dogBreed: e.target.value })}
                      placeholder="e.g. Golden Retriever"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 text-sm focus:border-[#0A1128] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#0A1128] mb-1.5">
                    Service
                  </label>
                  <select
                    value={newReview.serviceUsed}
                    onChange={(e) => setNewReview({ ...newReview, serviceUsed: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 text-sm focus:border-[#0A1128] focus:outline-none"
                  >
                    <option value="1 Hour Dog Riding (₹150)">1 Hour Dog Riding (₹150)</option>
                    <option value="2 Hours Dog Riding (₹300)">2 Hours Dog Riding (₹300)</option>
                    <option value="Monthly Standard Plan (₹9,999/mo)">Monthly Standard Plan (₹9,999/mo)</option>
                    <option value="Daily Dog Exercise">Daily Dog Exercise</option>
                    <option value="Dog Walking">Dog Walking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#0A1128] mb-1.5">
                    Your Review *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Tell us how your dog enjoyed the care and activity..."
                    className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 text-sm focus:border-[#0A1128] focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-600 hover:bg-slate-100 rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 text-xs font-black uppercase tracking-widest bg-[#0A1128] text-[#FFD700] hover:bg-black rounded-full shadow-sm"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
