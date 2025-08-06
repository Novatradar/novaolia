import Footer from "./footer";
import Navigation from "./nav";

const DisplayLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default DisplayLayout;
