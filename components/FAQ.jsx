import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    {
      id: 1,
      question: "How does your chat management service work?",
      answer: "Our team of professional chat managers handles all subscriber messages 24/7. We respond to DMs, comments, and messages using your voice and style. This increases subscriber retention and revenue through personalized engagement while saving you hours of time each day."
    },
    {
      id: 2,
      question: "What results can I expect?",
      answer: "While results vary based on your starting point and niche, our clients typically see a 3-5x increase in revenue within the first 3 months. Our comprehensive approach addresses all aspects of your OnlyFans business, from subscriber acquisition to retention and monetization."
    },
    {
      id: 3,
      question: "How do you maintain my privacy and security?",
      answer: "Privacy and security are our top priorities. We use enterprise-grade security measures, sign comprehensive NDAs, and implement strict access controls. Your personal information and content are always protected, and we never share your data with third parties."
    },
    {
      id: 4,
      question: "Do I need a minimum subscriber count to work with you?",
      answer: "We work with creators at all stages, from those just starting out to established accounts. Our strategies are tailored to your specific situation and goals. What matters most is your commitment to growth and willingness to implement our proven systems."
    },
    {
      id: 5,
      question: "How long does it take to see results?",
      answer: "Most clients begin seeing measurable improvements within the first 30 days. Significant revenue increases typically occur within 60-90 days as our strategies take full effect. We provide detailed weekly reports so you can track your progress every step of the way."
    },
    {
      id: 6,
      question: "What makes you different from other management agencies?",
      answer: "Unlike most agencies, we specialize exclusively in OnlyFans and have developed proprietary systems specifically for this platform. Our performance-based pricing means we only succeed when you do, and our comprehensive approach addresses all aspects of your business rather than just one element."
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section bg-slate-100">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2>Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about our services and how we can help you scale your OnlyFans.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-12"
        >
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="mb-4 border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-slate-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 text-slate-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 p-4 bg-white' : 'max-h-0'
                }`}
              >
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
