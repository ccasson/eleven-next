import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon, LockClosedIcon, HandshakeIcon } from '@heroicons/react/24/solid';

export default function TrustBar() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trustItems = [
    {
      icon: <CheckIcon className="w-5 h-5 text-primary" />,
      text: "Stripe Secure"
    },
    {
      icon: <LockClosedIcon className="w-5 h-5 text-primary" />,
      text: "GDPR Compliant"
    },
    {
      icon: <HandshakeIcon className="w-5 h-5 text-primary" />,
      text: "100% Confidential"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-around items-center gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="mr-2">{item.icon}</div>
              <span className="text-gray-300 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
