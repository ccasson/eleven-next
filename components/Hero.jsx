import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154252-596af9009e4a?auto=format&fit=crop&w=2070&q=80"
          alt="OnlyFans Creator"
          fill
          priority
          className="object-cover brightness-[0.3]"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white mb-6">
              Scale Your OnlyFans To Six Figures
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Done-for-you chat management, viral growth strategies, and proven systems to maximize your earnings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#apply" className="btn-primary">
                Apply Now
              </Link>
              <Link href="/#services" className="btn-outline">
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-white mb-4">
                <h3 className="mb-2">Average Client Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-4xl font-bold text-primary">8x</p>
                    <p className="text-sm">Revenue Growth</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary">90%</p>
                    <p className="text-sm">Retention Rate</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary">3x</p>
                    <p className="text-sm">Subscriber Growth</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary">24/7</p>
                    <p className="text-sm">Chat Management</p>
                  </div>
                </div>
              </div>
              <Link href="/#apply" className="btn-primary w-full text-center">
                Get These Results
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  )
}
