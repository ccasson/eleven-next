import Head from 'next/head';
import Nav from '../components/Nav';
import ResourcesList from '../components/ResourcesList';
import TrustBar from '../components/TrustBar';
import Footer from '../components/Footer';

export default function Resources() {
  return (
    <div className="bg-dark text-white">
      <Head>
        <title>Resources - Elevan OnlyFans Management Agency</title>
        <meta name="description" content="Free resources and guides to help OnlyFans creators grow their accounts and increase revenue." />
        <meta property="og:title" content="Resources - Elevan OnlyFans Management Agency" />
        <meta property="og:description" content="Free resources and guides to help OnlyFans creators grow their accounts and increase revenue." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elevan.agency/resources" />
        <meta property="og:image" content="/images/og.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            OnlyFans Growth Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our collection of guides, tips, and strategies to help you grow your OnlyFans account and maximize your earnings.
          </p>
        </div>
      </div>
      
      <ResourcesList />
      <TrustBar />
      <Footer />
    </div>
  );
}
