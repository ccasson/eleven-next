import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CountUp from 'react-countup'
import Slider from 'react-slick'

export default function Results() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const countupRef = useRef(null)
  
  const stats = [
    { id: 1, value: 87, label: "Average Revenue Increase", suffix: "%" },
    { id: 2, value: 24, label: "Hours Saved Per Week", suffix: "" },
    { id: 3, value: 90, label: "Client Retention Rate", suffix: "%" },
    { id: 4, value: 250, label: "Creators Scaled to 6-Figures", suffix: "+" }
  ]
  
  const payouts = [
    { id: 1, image: "/images/of-pay-1.png", alt: "OnlyFans Payout - $38k November 2024" },
    { id: 2, image: "/images/of-pay-2.png", alt: "OnlyFans Payout - $67k February 2025" },
    { id: 3, image: "/images/of-pay-3.png", alt: "OnlyFans Payout - $92k April 2025" }
  ]
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (countupRef.current) {
      observer.observe(countupRef.current)
    }
    
    return () => {
      if (countupRef.current) {
        observer.unobserve(countupRef.current)
      }
    }
  }, [hasAnimated])
  
  return (
    <section id="results" className="section bg-slate-100">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2>Real Results for Real Creators</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Our clients consistently achieve life-changing results with our proven systems and strategies.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            ref={countupRef}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.id} className="card text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {hasAnimated && (
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      suffix={stat.suffix} 
                    />
                  )}
                </h3>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="mb-4 text-center">Recent Client Payouts</h3>
            <Slider {...sliderSettings}>
              {payouts.map((payout) => (
                <div key={payout.id} className="px-2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden border border-slate-200">
                    <Image
                      src={payout.image || "/placeholder.svg"}
                      alt={payout.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
