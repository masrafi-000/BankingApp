import { BankServices, Footer, Freatures, Navbar, OpenAccount, Product, Question, Testimonial } from "./components";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Product />
      <BankServices />
      <Freatures />
      <Question />
      <Testimonial />
      <OpenAccount />
      <Footer />
    </div>
  );
};

export default Root;
