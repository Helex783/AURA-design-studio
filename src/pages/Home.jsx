import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';
import PortfolioPreview from '../components/home/PortfolioPreview';
import ProcessSteps from '../components/home/ProcessSteps';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services limit={3} showViewAll={true} />
      <PortfolioPreview limit={3} showViewAll={true} />
      <ProcessSteps />
      <Testimonials />
      <BlogPreview limit={3} showViewAll={true} />
      <CTASection />
    </>
  );
};

export default Home;