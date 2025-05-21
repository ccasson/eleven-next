import { useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const testimonials = [
  {
    quote: "Working with Eleven has been transformative for my business. They helped me double my revenue in just 3 months!",
    author: "Sarah Johnson",
    role: "Fitness Creator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    quote: "The strategies they implemented helped me grow my audience by 400% and create a sustainable business model.",
    author: "Mark Williams",
    role: "Tech Educator",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    quote: "Eleven's team understood exactly what my brand needed. They're truly experts in the creator economy.",
    author: "Jessica Chen",
    role: "Lifestyle Creator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const constraintsRef = useRef(null)

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x
    
    if (swipe < -50 && currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (swipe > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Creator Success Stories
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from creators who have transformed their businesses
          </motion.p>
        </div>

        <div ref={ref} className="relative overflow-hidden">
          <motion.div
            ref={constraintsRef}
            className="cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="flex"
              style={{ x: `calc(-${currentIndex * 100}%)` }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-4"
                >
                  <div className="bg-gray-50 rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-bold">{testimonial.author}</p>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Swipe to see more testimonials
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
