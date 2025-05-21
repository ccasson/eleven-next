import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Creator workspace"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70 mix-blend-multiply animate-gradient bg-[length:200%_200%]" />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Elevate Your Creator Business to New Heights
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We help creators scale their business with proven strategies, expert guidance, and done-for-you services.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#apply" className="btn-primary">
              Apply Now
            </Link>
            <Link href="#services" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-block text-center">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
