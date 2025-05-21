import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ApplyForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
  }

  return (
    <section id="apply" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Ready to Scale Your Creator Business?
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Apply now to see if you qualify for our services
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {submitSuccess ? (
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
              <p className="text-gray-600">Thank you for your interest. Our team will review your application and get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="socialUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Main Social Media URL
                </label>
                <input
                  id="socialUrl"
                  type="url"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition ${errors.socialUrl ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('socialUrl', { required: 'Social media URL is required' })}
                />
                {errors.socialUrl && (
                  <p className="mt-1 text-sm text-red-500">{errors.socialUrl.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="followers" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Followers
                </label>
                <select
                  id="followers"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition ${errors.followers ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('followers', { required: 'Please select an option' })}
                >
                  <option value="">Select an option</option>
                  <option value="0-10k">0 - 10,000</option>
                  <option value="10k-50k">10,000 - 50,000</option>
                  <option value="50k-100k">50,000 - 100,000</option>
                  <option value="100k-500k">100,000 - 500,000</option>
                  <option value="500k+">500,000+</option>
                </select>
                {errors.followers && (
                  <p className="mt-1 text-sm text-red-500">{errors.followers.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                  What are your main goals?
                </label>
                <textarea
                  id="goals"
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition ${errors.goals ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('goals', { required: 'Please share your goals' })}
                />
                {errors.goals && (
                  <p className="mt-1 text-sm text-red-500">{errors.goals.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
