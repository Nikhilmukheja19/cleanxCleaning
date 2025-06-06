import ContentArea from "./ContentArea";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full shadow-md bg-white z-10">
        <Navbar />
      </header>
      <main className="flex flex-1 flex-col md:flex-row p-4 gap-2">
        {/* <aside className="w-full md:w-1/4 bg-white shadow rounded-lg">
          <SideMenu />
        </aside> */}
        <section className="w-full md:w-full bg-white shadow rounded-lg mt-15">
          <ContentArea />
        </section>
      </main>
      <footer className="w-full bg-gray-100 text-center shadow-inner">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
