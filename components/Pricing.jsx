import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Starter",
      price: "25% Rev Share",
      features: [
        "Weekly stats",
        "Basic chat (12h)",
        "Content calendar"
      ],
      cta: "Get Started",
      link: "#apply",
      highlighted: false
    },
    {
      name: "Growth",
      price: "35% Rev Share",
      features: [
        "24/7 chat",
        "Viral promotions",
        "Paid ad budget",
        "Personal manager"
      ],
      cta: "Scale Me",
      link: "#apply",
      highlighted: true
    },
    {
      name: "Elite",
      price: "50% Rev Share",
      features: [
        "Everything in Growth",
        "Pro video editing",
        "Daily analytics call",
        "Dedicated legal help"
      ],
      cta: "Apply for Elite",
      link: "#apply",
      highlighted: false
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
    <section id="pricing" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your current stage and growth goals
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl p-8 ${plan.highlighted ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border border-secondary/50' : 'bg-gray-800'}`}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                {plan.price}
              </p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.link}>
                <span className={`block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.cta}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
