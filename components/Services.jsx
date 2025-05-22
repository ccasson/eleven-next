import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "24/7 Chat & Monetisation",
      description: "Never miss a sale with our AI-powered chat systems that convert subscribers into buyers.",
      icon: "💬",
    },
    {
      title: "Viral Growth Playbooks",
      description: "Custom strategies to 10x your subscriber count fast with proven promotion techniques.",
      icon: "🚀",
    },
    {
      title: "High-Ticket Fan Upsells",
      description: "Convert regular fans into premium spenders with our tested upsell frameworks.",
      icon: "💎",
    },
    {
      title: "Pro Content Editing",
      description: "Studio-quality edits that keep subscribers coming back and willing to pay more.",
      icon: "🎬",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to dominate OnlyFans and maximize your earnings
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="service-card"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
