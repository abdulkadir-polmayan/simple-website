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
} from "./components";
const App = () => {
  const [blog, setBlog] = useState(false);

  return (
    <div className=" w-full overflow-hidden bg-primary">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Companies />
      <Try />
    </div>
  );
};

export default App;
