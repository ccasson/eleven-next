import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ResourcesList() {
  const resources = [
    {
      id: 1,
      title: "How to Grow Your OnlyFans from Zero to Six Figures",
      excerpt: "Learn the proven strategies that have helped our clients scale their OnlyFans accounts to six-figure monthly earnings.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      date: "November 15, 2024"
    },
    {
      id: 2,
      title: "The Ultimate Guide to OnlyFans Chat Management",
      excerpt: "Discover how professional chat management can increase your subscriber retention and boost your monthly revenue.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      date: "October 28, 2024"
    },
    {
      id: 3,
      title: "Content Strategy: What Top 1% Creators Are Doing",
      excerpt: "An in-depth analysis of content strategies used by the most successful OnlyFans creators in 2024.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      date: "October 12, 2024"
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
    <section className="section bg-slate-100">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2>Creator Resources</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Free guides and strategies to help you grow your OnlyFans account.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {resources.map((resource) => (
            <motion.div 
              key={resource.id}
              variants={item}
              className="card card-hover"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-slate-500 mb-2">{resource.date}</p>
              <h3 className="mb-2">{resource.title}</h3>
              <p className="text-slate-600 mb-4">{resource.excerpt}</p>
              <Link href="/resources" className="btn-primary">
                Read More
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link href="/resources" className="btn-primary">
            View All Resources
          </Link>
        </div>
      </div>
    </section>
  )
}
