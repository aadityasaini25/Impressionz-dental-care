'use client';

import Image from 'next/image';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';

type TransformationItem = {
  type: 'transformation';
  before?: string;
  after: string;
  title: string;
  description: string;
  badgeText?: string;
};

type KidsItem = {
  type: 'kids';
  image: string;
  title: string;
  badge: string;
};

type Item = TransformationItem | KidsItem;

const TRANSFORMATION_ITEMS: Item[] = [
  {
    type: 'transformation',
    after: '/img/before-after/1.JPEG',
    title: 'Precision Aligners',
    description: 'Expert clear aligner transformation'
  },
  {
    type: 'transformation',
    after: '/img/before-after/2.JPEG',
    title: 'Smile Correction',
    description: 'Beautiful orthodontic results'
  },
  {
    type: 'transformation',
    after: '/img/before-after/3.JPEG',
    title: 'Adult Braces',
    description: 'Functional dental correction'
  },
  {
    type: 'transformation',
    after: '/img/before-after/4.JPEG',
    title: 'Advanced Orthodontics',
    description: 'Total smile makeover'
  },
  {
    type: 'transformation',
    after: '/img/before-after/5.JPEG',
    title: 'Teeth Alignment',
    description: 'Gap and alignment resolution'
  },
  {
    type: 'transformation',
    after: '/img/before-after/6.JPEG',
    title: 'Aesthetic Results',
    description: 'Premium smile redesign'
  },
  {
    type: 'transformation',
    after: '/img/before-after/7.JPEG',
    title: 'Precision Correction',
    description: 'Healthy, beautiful alignment'
  },
  {
    type: 'transformation',
    after: '/img/before-after/8.JPG',
    title: 'Total Transformation',
    description: 'Expert clinical outcome'
  }
];

export default function RealTransformations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  // Interaction tracking
  const [isHovered, setIsHovered] = useState(false);
  const lastInteractionTime = useRef(0);
  const resumeDelay = 2000; // 2 seconds

  // Auto-scroll logic
  // Auto-scroll logic (tuned for 'toothstory' speed)
  const baseVelocity = -2.8; // Calibrated for roughly 2s per 340px slide transition
  
  useAnimationFrame((time, delta) => {
    const timeSinceInteraction = Date.now() - lastInteractionTime.current;
    if (!isHovered && timeSinceInteraction > resumeDelay) {
      // Smoothly move by velocity adjusted for frame time (delta)
      const moveBy = baseVelocity * (delta / 16);
      x.set(x.get() + moveBy);
    }

    // Infinite wrap logic
    if (containerRef.current) {
      const singleSetWidth = containerRef.current.scrollWidth / 2;
      const currentX = x.get();
      
      // If we've scrolled past one full set to the left
      if (currentX <= -singleSetWidth) {
        x.set(currentX + singleSetWidth);
      } 
      // If we've scrolled to the right (manual trackpad)
      else if (currentX > 0) {
        x.set(currentX - singleSetWidth);
      }
    }
  });

  // Trackpad / Scroll support
  const handleWheel = (e: React.WheelEvent) => {
    lastInteractionTime.current = Date.now();
    // Support horizontal and vertical scrolling (some trackpads use vertical for horizontal scroll)
    const delta = e.deltaX || e.deltaY;
    x.set(x.get() - delta);
  };

  // Drag support starts here (via motion.div drag props)
  const handleDragStart = () => {
    lastInteractionTime.current = Date.now();
  };

  const handleDrag = () => {
    lastInteractionTime.current = Date.now();
  };

  // Double the items for seamless loop
  const allItems = [...TRANSFORMATION_ITEMS, ...TRANSFORMATION_ITEMS];

  return (
    <section className="py-20 md:py-32 bg-[#f8fafb] overflow-hidden relative" id="transformations">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 tracking-tight text-gray-900 leading-tight">
              Real Smiles, <span className="text-teal">Real Transformations</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-poppins font-light leading-relaxed">
              From expert orthodontic corrections to gentle kids&apos; care, see the impact of professional dentistry.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full py-10">
        {/* Edge Blurs for Premium Feel */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#f8fafb] via-[#f8fafb]/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#f8fafb] via-[#f8fafb]/80 to-transparent z-30 pointer-events-none" />

        <div 
          className="flex overflow-hidden active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onWheel={handleWheel}
        >
          <motion.div 
            ref={containerRef}
            className="flex gap-6 px-3 py-4 cursor-grab"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -10000, right: 10000 }} // Effectively infinite
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={() => { lastInteractionTime.current = Date.now(); }}
          >
            {allItems.map((item, idx) => (
              <div 
                key={`${item.title}-${idx}`} 
                className="flex-shrink-0 w-[240px] md:w-[340px]"
                onDragStart={(e) => e.preventDefault()} // Prevent native ghost image
                onClick={() => {
                  // Prevent click if we were dragging (standard UI pattern)
                  if (!lastInteractionTime.current || Date.now() - lastInteractionTime.current < 100) {
                    // Actual click logic here if needed
                  }
                }}
              >
                <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-3 border border-gray-100 overflow-hidden h-full group select-none pointer-events-none md:pointer-events-auto flex flex-col">
                  <div className="p-3 md:p-4 flex flex-col flex-grow">
                    <div className="relative aspect-square rounded-[18px] overflow-hidden bg-gray-50 mb-0 border border-gray-50 shadow-inner">
                      {item.type === 'transformation' ? (
                        item.before ? (
                          <div className="grid grid-cols-2 h-full gap-0.5">
                            <div className="relative h-full overflow-hidden bg-white">
                              <Image draggable={false} src={item.before} alt="Before" fill className="object-contain p-1 group-hover:scale-110 transition-transform duration-1000" sizes="(max-width: 768px) 240px, 340px" quality={100} priority={idx < 3} />
                              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black text-[10px] px-3 py-1 rounded-full font-poppins font-bold uppercase tracking-wider shadow-sm z-10">Before</div>
                            </div>
                            <div className="relative h-full overflow-hidden bg-white">
                              <Image draggable={false} src={item.after} alt="After" fill className="object-contain p-1 group-hover:scale-110 transition-transform duration-1000" sizes="(max-width: 768px) 240px, 340px" quality={100} priority={idx < 3} />
                              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black text-[10px] px-3 py-1 rounded-full font-poppins font-bold uppercase tracking-wider shadow-sm z-10">After</div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative h-full bg-white">
                            <Image draggable={false} src={item.after} alt={item.title} fill className="object-contain p-1 group-hover:scale-110 transition-transform duration-1000" sizes="(max-width: 1024px) 480px, 680px" quality={100} priority={idx < 3} />
                            {item.badgeText !== 'none' && (
                              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black text-[10px] px-3 py-1 rounded-full font-poppins font-bold uppercase tracking-wider shadow-sm z-10">
                                {item.badgeText || 'Result'}
                              </div>
                            )}
                          </div>
                        )
                      ) : (
                        <div className="relative h-full bg-white">
                          <Image draggable={false} src={item.image} alt={item.title} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-1000" sizes="(max-width: 1024px) 480px, 680px" quality={100} priority={idx < 3} />
                          <div className="absolute top-3 right-3 bg-white text-black text-[10px] px-3 py-1 rounded-full font-poppins font-bold uppercase tracking-wider shadow-lg z-10">{item.badge}</div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bg-teal py-4 px-4 mt-auto">
                    <h4 className="text-white font-poppins font-bold text-base md:text-lg text-center uppercase tracking-wide truncate">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-12 text-center overflow-hidden">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                 <div className="w-full h-full bg-[#485b51]/10 flex items-center justify-center text-[10px] font-bold text-[#485b51]">{i}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm font-poppins font-medium">
            <span className="text-gray-900 font-bold">1,000+</span> Happy Patients
          </p>
        </motion.div>
      </div>
    </section>
  );
}
