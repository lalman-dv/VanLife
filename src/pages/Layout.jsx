import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/Components/Footer.jsx";
const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="px-4 max-w-5xl mx-auto pb-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
