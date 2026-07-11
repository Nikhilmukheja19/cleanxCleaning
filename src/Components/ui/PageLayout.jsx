/* eslint-disable react/prop-types */
import Navbar from "../Navbar";
import Footer from "../Footer";

const PageLayout = ({ children, showFooter = true, className = "" }) => {
  return (
    <div className={`min-h-screen flex flex-col page-gradient ${className}`}>
      <Navbar />
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
