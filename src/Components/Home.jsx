import ContactUs from "./ContactUs";
import ContentArea from "./ContentArea";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col page-gradient">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <ContentArea />
        <ContactUs embedded />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
