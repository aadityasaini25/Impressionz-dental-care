'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  benefit: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do Invisalign aligners work?",
    answer:
      "Invisalign uses a series of custom-made, clear plastic trays to gradually shift your teeth into the desired position.",
    benefit: "Enjoy your favorite foods without restrictions.",
  },
  {
    question: "How long will my orthodontic treatment take?",
    answer:
      "Treatment duration varies based on complexity, typically ranging from 12 to 24 months, with minor cases finished in just 6 months.",
    benefit: "Experience a faster transformation with advanced 3D planning.",
  },
  {
    question: "Are clear aligners as effective as traditional braces?",
    answer:
      "Yes, modern clear aligners are highly effective for most cases, providing precise tooth movement with maximum comfort.",
    benefit: "Achieve professional results without the discomfort of metal.",
  },
  {
    question: "Can I eat normally with clear aligners?",
    answer:
      "Since the aligners are removable, there are zero dietary restrictions. Simply remove them to eat, brush, and floss.",
    benefit: "Maintain your lifestyle while your smile improves every day.",
  },
  {
    question: "What are dental implants and are they permanent?",
    answer:
      "Dental implants are titanium posts that act as permanent roots for replacement teeth. They fuse with your jawbone, making them the most stable and lifelong solution for missing teeth.",
    benefit: "Regain your natural smile and bite for a lifetime.",
  },
  {
    question: "Is the dental implant procedure painful?",
    answer:
      "Not at all. The procedure is performed under local anesthesia. Most of our patients find the process surprisingly comfortable and less painful than a simple tooth extraction.",
    benefit: "Experience a completely painless restoration with our gentle techniques.",
  },
  {
    question: "How long does the dental implant process take?",
    answer:
      "The total process typically takes 3 to 6 months. This allows the implant to safely fuse with your bone (osseointegration) before the final, custom-made crown is attached.",
    benefit: "Get a rock-solid foundation for a tooth that feels exactly like your own.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden" id="faq">
      {/* decorative blob */}
      <div aria-hidden className="pointer-events-none absolute -top-10 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 -left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 badge-pink px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4"
          >
            <Sparkles size={12} />
            <span>Got Questions? We Have Answers</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 leading-tight">
            Common <span className="text-gradient-logo">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg font-light">
            Empowering your decision with transparent information and clinical insights.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group transition-all duration-300 rounded-2xl border bg-white/90 backdrop-blur-sm ${
                openIndex === index
                ? 'border-[var(--accent-pink)]/20 depth-stack'
                : 'border-gray-100 hover:border-[var(--brand-teal)]/30 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className="w-full p-5 md:p-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                  openIndex === index ? 'text-[var(--brand-teal-deep)]' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                  ? 'bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)] border-transparent text-white rotate-90 shadow-md'
                  : 'bg-gray-50 border-gray-100 text-gray-400 group-hover:border-[var(--brand-teal)]/30 group-hover:text-[var(--brand-teal-deep)]'
                }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-6 md:px-6 md:pb-8 pt-0">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/30 to-transparent mb-6" />

                      <div className="space-y-4">
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                        <p className="text-[var(--brand-teal-deep)] text-base font-medium leading-relaxed italic border-l-2 border-[var(--accent-pink)] pl-4">
                          &quot;{faq.benefit}&quot;
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs">
            Still have questions? <a href="tel:+919821528338" className="text-[var(--accent-pink)] font-bold underline hover:text-[var(--accent-pink-dark)] transition-colors">Contact our specialists</a>.
          </p>
        </div>
      </div>
    </section>
  );
}