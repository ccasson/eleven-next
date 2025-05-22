import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-bold text-white">
          Elevan
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#services" className="text-white hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#pricing" className="text-white hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/#results" className="text-white hover:text-primary transition-colors">
            Results
          </Link>
          <Link href="/#faq" className="text-white hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/resources" className="text-white hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="/#apply" className="btn-primary">
            Apply Now
          </Link>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-slate-900 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container flex flex-col space-y-4">
            <Link 
              href="/#services" 
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#pricing" 
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/#results" 
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Results
            </Link>
            <Link 
              href="/#faq" 
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/resources" 
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/#apply" 
              className="btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
