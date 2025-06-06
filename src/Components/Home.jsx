import ContactUs from "./ContactUs";
import ContentArea from "./ContentArea";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 w-full shadow-md bg-white z-50">
        <Navbar />
      </header>
      <main className="flex flex-1 flex-col gap-4 pt-16">
        <section className="w-full bg-white shadow rounded-lg">
          <HeroSection />
        </section>
        <section className="top-0 left-0 w-full bg-white shadow rounded-lg">
          <ContentArea />
        </section>
        <section className="top-0 left-0 w-full bg-white shadow rounded-lg">
          <ContactUs />
        </section>
      </main>

      <footer className="top-0 left-0 w-full bg-gray-100 text-center shadow-inner mt-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
