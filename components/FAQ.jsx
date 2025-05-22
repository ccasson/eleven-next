import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "How does the revenue share model work?",
      answer: "We take a percentage of your monthly OnlyFans revenue based on your chosen plan. This aligns our incentives with yours - we only succeed when you do. All payments are processed securely through Stripe."
    },
    {
      question: "What happens to my existing subscribers?",
      answer: "Your existing subscribers remain yours. We focus on growing your subscriber base and increasing revenue from both new and existing fans through our proven engagement strategies."
    },
    {
      question: "Who handles my chat and DMs?",
      answer: "Our professional chat team handles all your messages using your voice and style guide. We're trained to maximize conversions while maintaining authentic relationships with your fans."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most creators see significant growth within the first 30 days. Our Growth and Elite plans typically achieve 2-3x revenue within 60-90 days, though results vary based on your starting point and content quality."
    },
    {
      question: "Do I need to create more content?",
      answer: "We optimize your existing content strategy and provide guidance on what performs best. While more quality content helps, our focus is on maximizing returns from your current production capacity."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, all our plans are month-to-month with no long-term contracts. We require a 14-day notice period to ensure a smooth transition if you decide to leave."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about our OnlyFans management services
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-gray-800 rounded-lg overflow-hidden">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-white font-medium focus:outline-none">
                      <span>{faq.question}</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-primary transition-transform duration-300`}
                      />
                    </Disclosure.Button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Disclosure.Panel className="px-6 pb-4 text-gray-300">
                            {faq.answer}
                          </Disclosure.Panel>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
