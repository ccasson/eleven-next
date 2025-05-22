import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1621833783490-7b3c4ff52000?auto=format&fit=crop&w=2070&q=80"
          alt="Content creator with ring light in studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
        >
          Turn Your OnlyFans into a Six-Figure Business
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-white mb-10 max-w-3xl mx-auto"
        >
          Elite management for creators ready to scale with our proven systems for 24/7 chat + viral growth.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="#apply">
            <span className="btn-primary">
              Partner with Elevan
            </span>
          </Link>
          <Link href="#contact">
            <span className="btn-secondary">
              Book a Free Consultation
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
