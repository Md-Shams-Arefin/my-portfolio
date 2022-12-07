import Footer from "./Footer";
import Navbar from "./Navbar";
import Example from "./Navbar_2"


const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="fixed container mx-auto z-10">
      <Example/>
      </div>
        {children}
      <Footer />
    </div>
  );
};

export default Layout;
