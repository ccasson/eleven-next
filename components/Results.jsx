import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Results() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const results = [
    { before: 12, after: 86, period: "3 mo" },
    { before: 22, after: 132, period: "4 mo" },
    { before: 7, after: 48, period: "2 mo" },
  ];

  const slides = [
    { image: "/images/of-pay-1.png", alt: "OnlyFans earnings statement showing $86,000 monthly revenue from Feb 2024 to Feb 2025" },
    { image: "/images/of-pay-2.png", alt: "OnlyFans earnings statement showing $132,000 monthly revenue from Feb 2024 to Feb 2025" },
    { image: "/images/of-pay-3.png", alt: "OnlyFans earnings statement showing $48,000 monthly revenue from Feb 2024 to Feb 2025" },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      const timer1 = setTimeout(() => {
        animateNumber(0, results[0].before, setCount1, 1500);
        animateNumber(0, results[0].after, setCount2, 2000);
      }, 300);
      
      const timer2 = setTimeout(() => {
        animateNumber(0, results[1].before, setCount3, 1500);
        animateNumber(0, results[1].after, setCount4, 2000);
      }, 600);
      
      const timer3 = setTimeout(() => {
        animateNumber(0, results[2].before, setCount5, 1500);
        animateNumber(0, results[2].after, setCount6, 2000);
      }, 900);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [inView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const animateNumber = (start, end, setter, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="results" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Real Creator Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our clients consistently scale from struggling to six-figure monthly earnings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {results.map((result, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-gray-400">${index === 0 ? count1 : index === 1 ? count3 : count5}k</span>
                    <span className="mx-2 text-2xl text-gray-400">→</span>
                    <span className="text-3xl font-bold text-primary">${index === 0 ? count2 : index === 1 ? count4 : count6}k</span>
                  </div>
                  <p className="text-gray-300 font-medium">{result.period}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="relative h-[500px] rounded-xl overflow-hidden"
          >
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  x: currentSlide === index ? 0 : currentSlide > index ? -100 : 100
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={slide.image || "/placeholder.svg"} 
                    alt={slide.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </motion.div>
            ))}
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-primary' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
