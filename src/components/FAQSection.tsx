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
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium mb-4"
          >
            <Sparkles size={14} />
            <span>Got Questions? We Have Answers</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 leading-tight">
            Common <span className="text-[#485b51]">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg font-light">
            Empowering your decision with transparent information and clinical insights.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`group transition-all duration-300 rounded-2xl border bg-white ${
                openIndex === index 
                ? 'border-[#485b51]/20 shadow-md' 
                : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className="w-full p-5 md:p-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                  openIndex === index ? 'text-[#485b51]' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                  ? 'bg-[#485b51] border-[#485b51] text-white rotate-90 shadow-sm shadow-[#485b51]/20' 
                  : 'bg-gray-50 border-gray-100 text-gray-400 group-hover:border-[#485b51]/30 group-hover:text-[#485b51]'
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
                      <div className="w-full h-px bg-gray-50 mb-6" />
                      
                      <div className="space-y-4">
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                        <p className="text-[#485b51] text-base font-medium leading-relaxed italic border-l-2 border-emerald-100 pl-4">
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
            Still have questions? <a href="tel:+919023523178" className="text-[#485b51] font-bold underline hover:text-[#3d4d44] transition-colors">Contact our specialists</a>.
          </p>
        </div>
      </div>
    </section>
  );
}