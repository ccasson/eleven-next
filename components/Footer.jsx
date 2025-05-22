import { motion } from 'framer-motion';
import TrustBar from './TrustBar';

export default function Footer() {
  return (
    <footer className="bg-dark py-12 border-t border-primary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-6 sm:mb-0 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-primary">Elevan</h3>
            <p className="text-white/80">Empowering OnlyFans creators to succeed.</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
            >
              Partner with Elevan
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
            >
              Book a Free Consultation
            </motion.a>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 5.8a8.49 8.49 0 01-2.36.64 4.13 4.13 0 001.81-2.27 8.21 8.21 0 01-2.61 1 4.1 4.1 0 00-7 3.74 11.64 11.64 0 01-8.45-4.29 4.16 4.16 0 00-.55 2.09 4.09 4.09 0 001.82 3.41 4.01 4.01 0 01-1.86-.51v.05a4.1 4.1 0 003.3 4.03 4.09 4.09 0 01-1.85.07 4.11 4.11 0 003.83 2.85 8.23 8.23 0 01-5.06 1.75 8.4 8.4 0 01-.97-.06 11.62 11.62 0 006.29 1.84c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.36-.01-.54A8.31 8.31 0 0022 5.8z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808v.024c0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06h-.024c-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808v-.024c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C9.901 2.013 10.256 2 12.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.6.204-2.058.404a3.302 3.302 0 00-1.193.777 3.302 3.302 0 00-.777 1.193c-.2.458-.36 1.082-.404 2.058-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.204 1.6.404 2.058a3.302 3.302 0 00.777 1.193 3.302 3.302 0 001.193.777c.458.2 1.082.36 2.058.404 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.976-.045 1.6-.204 2.058-.404a3.302 3.302 0 001.193-.777 3.302 3.302 0 00.777-1.193c.2-.458.36-1.082.404-2.058.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.976-.204-1.6-.404-2.058a3.302 3.302 0 00-.777-1.193 3.302 3.302 0 00-1.193-.777c-.458-.2-1.082-.36-2.058-.404-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 00-6.162 6.162A6.162 6.162 0 0012 18.162a6.162 6.162 0 006.162-6.162A6.162 6.162 0 0012 5.838zm0 10.324a4.162 4.162 0 01-4.162-4.162A4.162 4.162 0 0112 7.838a4.162 4.162 0 014.162 4.162A4.162 4.162 0 0112 16.162zm4.837-9.325a1.44 1.44 0 01-1.44-1.44 1.44 1.44 0 011.44-1.44 1.44 1.44 0 011.44 1.44 1.44 1.44 0 01-1.44 1.44z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="mt-8">
          <TrustBar />
        </div>
      </div>
    </footer>
  );
}
