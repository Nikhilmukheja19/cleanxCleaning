import ContentArea from "./ContentArea";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full shadow-md bg-white z-10">
        <Navbar />
      </header>
      {/* Add top padding to account for the fixed navbar height */}
      <main className="pt-20 px-4 flex flex-1 flex-col gap-4">
        <section className="w-full bg-white shadow rounded-lg">
          <ContentArea />
        </section>
      </main>
      <footer className="w-full bg-gray-100 text-center shadow-inner mt-4">
        <Footer />
      </footer>{" "}
    </div>
  );
};

export default Home;
