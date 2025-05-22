import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Resources() {
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
    },
    {
      id: 4,
      title: "Maximizing Revenue with Premium Pricing Strategies",
      excerpt: "Learn how to structure your pricing tiers to maximize revenue without sacrificing subscriber growth.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      date: "September 30, 2024"
    },
    {
      id: 5,
      title: "Building Your Personal Brand Beyond OnlyFans",
      excerpt: "Strategies for leveraging your OnlyFans success to build a sustainable personal brand across multiple platforms.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      date: "September 15, 2024"
    },
    {
      id: 6,
      title: "The Psychology of Subscriber Retention",
      excerpt: "Understanding what keeps subscribers engaged and willing to pay month after month.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      date: "August 28, 2024"
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
    <>
      <Head>
        <title>Resources - Elevan OnlyFans Management Agency</title>
        <meta name="description" content="Guides, tips, and strategies for OnlyFans creators looking to scale their accounts." />
        <meta property="og:image" content="/images/og.jpg" />
      </Head>
      
      <Nav />
      
      <section className="section bg-slate-100">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            <h1>Creator Resources</h1>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Guides, tips, and strategies to help you scale your OnlyFans account and maximize your earnings.
            </p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
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
                <button className="btn-primary">Read More</button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}
