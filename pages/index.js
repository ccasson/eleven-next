import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Results from '../components/Results';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import TrustBar from '../components/TrustBar';
import ApplyForm from '../components/ApplyForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-dark text-white">
      <Head>
        <title>Elevan – OnlyFans Management Agency</title>
        <meta name="description" content="Done-for-you chat, viral growth & 6-figure results for OnlyFans creators." />
        <meta property="og:title" content="Elevan – OnlyFans Management Agency" />
        <meta property="og:description" content="Done-for-you chat, viral growth & 6-figure results for OnlyFans creators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elevan.agency" />
        <meta property="og:image" content="/images/og.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />
      <Services />
      <Pricing />
      <Results />
      <Process />
      <Testimonials />
      <FAQ />
      <ApplyForm />
      <TrustBar />
      <Footer />
    </div>
  );
}
