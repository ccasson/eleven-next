import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

export default function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm()
  
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log(data)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }
  
  return (
    <section id="apply" className="section bg-slate-900 text-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2>Apply to Partner with Elevan</h2>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to scale your OnlyFans to six figures? Fill out the application below and we'll be in touch within 24 hours.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-12"
        >
          {isSubmitted ? (
            <div className="card bg-slate-800 text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mb-4">Application Submitted!</h3>
              <p className="text-slate-300 mb-6">
                Thank you for applying to partner with Elevan. Our team will review your application and get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="card bg-slate-800 p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className={`w-full p-3 bg-slate-700 border ${errors.firstName ? 'border-red-500' : 'border-slate-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className={`w-full p-3 bg-slate-700 border ${errors.lastName ? 'border-red-500' : 'border-slate-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full p-3 bg-slate-700 border ${errors.email ? 'border-red-500' : 'border-slate-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
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
              
              <div className="mb-6">
                <label htmlFor="onlyfansUrl" className="block mb-2 text-sm font-medium">
                  OnlyFans URL
                </label>
                <input
                  id="onlyfansUrl"
                  type="text"
                  className={`w-full p-3 bg-slate-700 border ${errors.onlyfansUrl ? 'border-red-500' : 'border-slate-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register('onlyfansUrl', { required: 'OnlyFans URL is required' })}
                />
                {errors.onlyfansUrl && (
                  <p className="mt-1 text-sm text-red-500">{errors.onlyfansUrl.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="currentRevenue" className="block mb-2 text-sm font-medium">
                  Current Monthly Revenue
                </label>
                <select
                  id="currentRevenue"
                  className={`w-full p-3 bg-slate-700 border ${errors.currentRevenue ? 'border-red-500' : 'border-slate-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register('currentRevenue', { required: 'Please select your current revenue' })}
                >
                  <option value="">Select your current revenue</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1001-5000">$1,001 - $5,000</option>
                  <option value="5001-10000">$5,001 - $10,000</option>
                  <option value="10001-25000">$10,001 - $25,000</option>
                  <option value="25001-50000">$25,001 - $50,000</option>
                  <option value="50001+">$50,001+</option>
                </select>
                {errors.currentRevenue && (
                  <p className="mt-1 text-sm text-red-500">{errors.currentRevenue.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="goals" className="block mb-2 text-sm font-medium">
                  What are your goals for your OnlyFans?
                </label>
                <textarea
                  id="goals"
                  rows="4"
                  className={`w-full p-3 bg-slate-700 border ${errors.goals ? 'border-red-500' : 'border-slate-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  {...register('goals', { required: 'Please share your goals' })}
                ></textarea>
                {errors.goals && (
                  <p className="mt-1 text-sm text-red-500">{errors.goals.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Partner with Elevan'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
