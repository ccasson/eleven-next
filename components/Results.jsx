import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import Image from 'next/image'

const stats = [
  { value: 500, label: 'Creators Helped', suffix: '+' },
  { value: 10, label: 'Million in Revenue', prefix: '$', suffix: 'M+' },
  { value: 30, label: 'Average Growth', suffix: '%' },
]

const payoutImages = [
  '/images/payout1.png',
  '/images/payout2.png',
  '/images/payout3.png',
]

export default function Results() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % payoutImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Proven Results
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our track record speaks for itself
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-primary/10 rounded-lg p-4 mr-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {inView ? (
                      <>
                        {stat.prefix && <span>{stat.prefix}</span>}
                        <CountUp end={stat.value} duration={2.5} />
                        {stat.suffix && <span>{stat.suffix}</span>}
                      </>
                    ) : (
                      <>
                        {stat.prefix}{stat.value}{stat.suffix}
                      </>
                    )}
                  </div>
                </div>
                <div className="text-xl font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={payoutImages[currentImage] || "/placeholder.svg"}
                  alt={`Creator payout screenshot ${currentImage + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {payoutImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentImage === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`View payout image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
