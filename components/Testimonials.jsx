import { motion } from 'framer-motion'
import Slider from 'react-slick'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah J.",
      role: "Fitness Creator",
      quote: "Working with Elevan has completely transformed my OnlyFans business. In just 3 months, my revenue increased by 7x and I'm working fewer hours than ever. Their chat management team is incredible!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      name: "Michael T.",
      role: "Lifestyle Creator",
      quote: "I was skeptical at first, but Elevan delivered on every promise. Their strategies helped me grow from $5k to over $50k per month in less than 6 months. The best investment I've ever made in my business.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      name: "Jessica M.",
      role: "Fashion Creator",
      quote: "The team at Elevan doesn't just manage your account - they transform it. My subscriber count has tripled, my retention rate is at 85%, and I'm making more in a week than I used to make in a month.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    }
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
  
  return (
    <section className="section bg-slate-900 text-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2>What Our Clients Say</h2>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from creators who have transformed their OnlyFans with our help.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-slate-800 rounded-lg p-8 text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  )
}
