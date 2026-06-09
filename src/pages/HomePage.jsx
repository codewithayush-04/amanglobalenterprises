import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
        <Services />
        <Products />
        <Gallery />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
