import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "25%",
      description: "Perfect for creators just starting out who want to scale quickly.",
      features: [
        "24/7 Chat Management",
        "Basic Content Strategy",
        "Weekly Performance Reports",
        "Email Support"
      ],
      cta: "Apply Now",
      highlighted: false
    },
    {
      id: 2,
      name: "Growth",
      price: "35%",
      description: "Our most popular plan for creators ready to scale to six figures.",
      features: [
        "24/7 Premium Chat Management",
        "Advanced Content Strategy",
        "Growth Marketing Campaigns",
        "Twice-Weekly Strategy Calls",
        "Priority Support"
      ],
      cta: "Apply Now",
      highlighted: true
    },
    {
      id: 3,
      name: "Elite",
      price: "50%",
      description: "For established creators looking to maximize revenue and scale beyond.",
      features: [
        "VIP Chat Management",
        "Custom Content Strategy",
        "Advanced Growth Marketing",
        "Daily Strategy Calls",
        "Revenue Optimization",
        "Dedicated Account Manager"
      ],
      cta: "Apply Now",
      highlighted: false
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="pricing" className="section bg-slate-900 text-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2>Simple, Performance-Based Pricing</h2>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            We only succeed when you do. Our performance-based pricing means we're fully aligned with your growth goals.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {plans.map((plan) => (
            <motion.div 
              key={plan.id}
              variants={item}
              className={`card ${plan.highlighted ? 'border-2 border-primary' : 'bg-slate-800'} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="text-center mb-6">
                <h3 className="mb-2">{plan.name}</h3>
                <p className="text-5xl font-bold mb-2">{plan.price}</p>
                <p className="text-slate-400">of monthly revenue</p>
              </div>
              <p className="text-center mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/#apply" className={`btn-primary w-full text-center ${plan.highlighted ? 'bg-primary hover:bg-secondary' : ''}`}>
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
