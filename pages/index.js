import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Results from '../components/Results'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import ApplyForm from '../components/ApplyForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eleven - Elevate Your Creator Business</title>
        <meta name="description" content="Eleven helps creators scale their business with proven strategies, expert guidance, and done-for-you services." />
        <meta property="og:title" content="Eleven - Elevate Your Creator Business" />
        <meta property="og:description" content="Eleven helps creators scale their business with proven strategies, expert guidance, and done-for-you services." />
        <meta property="og:image" content="https://eleven-next-mrtlqie8g-colincasson80-gmailcoms-projects.vercel.app/og.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />
      <Hero />
      <Services />
      <Results />
      <Process />
      <Testimonials />
      <ApplyForm />
      <Footer />
    </>
  )
}
