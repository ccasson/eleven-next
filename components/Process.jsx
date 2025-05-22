import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "1",
      title: "Apply",
      description: "I'll review your profile and current stats to see if we're a good fit for each other.",
      icon: "📝",
    },
    {
      number: "2",
      title: "Onboarding",
      description: "We'll set up my proven systems for your account and create your custom growth strategy.",
      icon: "🔄",
    },
    {
      number: "3",
      title: "Scale Revenue",
      description: "Watch your subscribers and revenue grow as I handle everything from chat to content strategy.",
      icon: "📈",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="process" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Our Simple Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three steps to transform your OnlyFans into a six-figure business
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="process-card"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-primary to-secondary rounded-full text-white text-2xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
