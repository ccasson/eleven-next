import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Results from '../components/Results'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import ResourcesList from '../components/ResourcesList'
import ApplyForm from '../components/ApplyForm'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elevan – OnlyFans Management Agency</title>
        <meta name="description" content="Done-for-you chat, viral growth & six-figure payouts for OnlyFans creators." />
        <meta property="og:image" content="/images/og.jpg" />
      </Head>
      
      <Nav />
      <Hero />
      <Services />
      <Pricing />
      <Results />
      <Process />
      <FAQ />
      <Testimonials />
      <ResourcesList />
      <ApplyForm />
      <TrustBar />
      <Footer />
    </>
  )
}
