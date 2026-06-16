import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Vision from '../components/Vision';
import Services from '../components/Services';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import Features from '../components/Features';
import FreeTrial from '../components/FreeTrial';
import Quotation from '../components/Quotation';
import FAQ from '../components/FAQ';
import Policies from '../components/Policies';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

/**
 * Public landing page.
 */
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Services />
        <Products />
        <Gallery />
        <Features />
        <FreeTrial />
        <Quotation />
        <FAQ />
        <Policies />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default HomePage;
