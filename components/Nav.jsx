import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-2xl font-bold gradient-text">
                  Elevan
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link href="#services">
              <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300">
                Services
              </span>
            </Link>
            <Link href="#pricing">
              <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300">
                Pricing
              </span>
            </Link>
            <Link href="#results">
              <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300">
                Results
              </span>
            </Link>
            <Link href="#faq">
              <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300">
                FAQ
              </span>
            </Link>
            <Link href="/resources">
              <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300">
                Resources
              </span>
            </Link>
            <Link href="#apply">
              <span className="ml-4 btn-primary text-sm">
                Apply Now
              </span>
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#services">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-800">
                Services
              </span>
            </Link>
            <Link href="#pricing">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-800">
                Pricing
              </span>
            </Link>
            <Link href="#results">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-800">
                Results
              </span>
            </Link>
            <Link href="#faq">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-800">
                FAQ
              </span>
            </Link>
            <Link href="/resources">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary hover:bg-gray-800">
                Resources
              </span>
            </Link>
            <Link href="#apply">
              <span className="block px-3 py-2 rounded-md text-base font-medium btn-primary mt-4 text-center">
                Apply Now
              </span>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
