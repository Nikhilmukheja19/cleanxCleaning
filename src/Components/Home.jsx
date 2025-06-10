import ContactUs from "./ContactUs";
import ContentArea from "./ContentArea";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 w-full shadow-md bg-white z-50"></header>

      {/* Main content area with padding to account for fixed navbar */}
      <main className="flex flex-1 flex-col pt-20  bg-gradient-to-br from-blue-100 via-blue-200 to-white">
        {/* <div className="max-w-7xl mx-auto space-y-6"> */}
        {/* Hero Section */}
        <section className="bg-white shadow rounded-lg">
          <HeroSection />
        </section>

        {/* Content Area */}
        <section className="bg-white shadow rounded-lg">
          <ContentArea />
        </section>

        {/* Contact Us */}
        <section className="bg-white shadow rounded-lg">
          <ContactUs />
        </section>
        {/* </div> */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center shadow-inner">
        {/* <div className="max-w-7xl mx-auto px-4"> */}
        <Footer />
        {/* </div> */}
      </footer>
    </div>
  );
};

export default Home;
