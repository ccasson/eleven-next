import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function ResourcesList() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resources = [
    {
      title: "5 Ways to Double OF Tips",
      excerpt: "Learn the psychological triggers that make fans want to tip more and how to implement them in your chat strategy.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    },
    {
      title: "Batch Shoot Content in 2 Hours",
      excerpt: "Our proven system for creating a week's worth of high-quality content in just one short session.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    },
    {
      title: "Prevent Chat Burn-out",
      excerpt: "How top creators maintain boundaries while keeping fans engaged and spending consistently.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    }
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
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Creator Resources
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Free guides and strategies to help you grow your OnlyFans
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="h-48 relative">
                <img 
                  src={resource.image || "/placeholder.svg"} 
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.excerpt}</p>
                <Link href={resource.link}>
                  <span className="text-primary hover:text-secondary transition-colors duration-300 font-medium">
                    Read More →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
