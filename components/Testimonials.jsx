import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Elevan doubled my revenue in just 30 days. Their chat system converts like crazy!",
      name: "Sophia M.",
      role: "Top 0.2% OnlyFans Creator",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "From $15K to $86K monthly in 90 days. Their high-ticket strategy changed everything.",
      name: "Jessica & Mark",
      role: "Couple Creators, Top 0.5%",
      image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The viral growth playbook got me 12,000 new subscribers in my first month.",
      name: "Olivia R.",
      role: "Top 0.3% OnlyFans Creator",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Creator Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from creators who transformed their OnlyFans with our management
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : 100,
                    position: currentSlide === index ? 'relative' : 'absolute'
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full testimonial-card"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image || "/placeholder.svg"} 
                        alt={`${testimonial.name} profile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="mb-4 text-4xl text-primary">❝</div>
                      <p className="text-gray-300 mb-6 italic text-lg">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-primary">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary w-6' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
