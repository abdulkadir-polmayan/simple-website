import styles from "./styles";
import { useState } from "react";
import {
  Navbar,
  Hero,
  Billing,
  Stats,
  Business,
  CardDeal,
  Testimonials,
  Companies,
  Try,
  Footer,
} from "./components";
const App = () => {
  const [blog, setBlog] = useState(false);

  return (
    <div className=" w-full overflow-hidden bg-primary font-poppins">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Companies />
      <Try />
      <Footer />
    </div>
  );
};

export default App;
