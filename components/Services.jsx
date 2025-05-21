import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChartLine, FaUsers, FaLaptopCode, FaBullhorn } from 'react-icons/fa'

const services = [
  {
    title: 'Growth Strategy',
    description: 'Custom growth plans tailored to your niche, audience, and goals.',
    icon: <FaChartLine className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Community Building',
    description: 'Develop engaged communities that support your brand long-term.',
    icon: <FaUsers className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Content Production',
    description: 'High-quality content creation services to keep your audience engaged.',
    icon: <FaLaptopCode className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Monetization',
    description: 'Implement proven revenue streams to maximize your earning potential.',
    icon: <FaBullhorn className="h-8 w-8 text-primary" />,
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive solutions to help you grow your creator business
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
