import React, { useState } from 'react';
import { FileText, Download, Printer, Copy, Check, X, ExternalLink, Sparkles } from 'lucide-react';
import { generateStandaloneBrochureHtml } from '../utils/brochureHtmlGenerator';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htmlContent = generateStandaloneBrochureHtml();

  // Trigger Print to PDF
  const handlePrintPdf = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 350);
    }
  };

  // Download Standalone .html file
  const handleDownloadHtml = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DOG_STAR_Official_Brochure.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Copy HTML Source
  const handleCopyHtml = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-[32px] border-2 border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0A1128] text-white p-6 sm:p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFD700] text-[#0A1128] flex items-center justify-center font-black">
              ★
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#FFD700]">
                Official Documents
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight">
                Download PDF / HTML Brochure
              </h3>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Download or print the complete <strong>DOG STAR</strong> service catalog, rates (₹150, ₹300, ₹9,999/mo), team profiles (Gokarna Jaishi, Sagar, Manoj Jaishi), and safety guarantees in PDF or offline HTML format.
          </p>

          {/* Action Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* 1. PDF Print Action */}
            <button
              onClick={handlePrintPdf}
              className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 hover:border-[#0A1128] bg-slate-50 hover:bg-[#FFD700]/10 text-left transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A1128] text-white group-hover:bg-[#FFD700] group-hover:text-[#0A1128] flex items-center justify-center flex-shrink-0 transition-colors shadow-xs">
                <Printer className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#0A1128]">
                  Print / Save as PDF
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  High-res printable document with clean styling.
                </div>
              </div>
            </button>

            {/* 2. Download .HTML Action */}
            <button
              onClick={handleDownloadHtml}
              className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 hover:border-[#0A1128] bg-slate-50 hover:bg-[#FFD700]/10 text-left transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A1128] text-white group-hover:bg-[#FFD700] group-hover:text-[#0A1128] flex items-center justify-center flex-shrink-0 transition-colors shadow-xs">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#0A1128]">
                  Download HTML File
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Full standalone offline file with embedded CSS.
                </div>
              </div>
            </button>

          </div>

          {/* Secondary Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <button
              onClick={handleCopyHtml}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">HTML Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-600" />
                  <span>Copy Raw HTML Code</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#0A1128] text-white font-black uppercase tracking-widest text-[11px] hover:bg-black transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
