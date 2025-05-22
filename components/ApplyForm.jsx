import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Partner with Elevan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to scale your OnlyFans to six figures? Apply now for our exclusive management.
          </p>
        </div>

        {!isSubmitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white"
                placeholder="Jane Doe"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white"
                placeholder="jane@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                Tell us about your OnlyFans
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white"
                placeholder="Current subscriber count, monthly revenue, and your goals..."
              ></textarea>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Partner with Elevan'}
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg text-center"
          >
            <div className="text-5xl mb-4 text-primary">✓</div>
            <h3 className="text-2xl font-bold mb-2 text-white">Application Received!</h3>
            <p className="text-gray-300 mb-6">
              Thank you for applying to Elevan. We'll review your application and get back to you within 24-48 hours.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
