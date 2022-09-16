import styles from "./styles";
import { useState } from "react";
import { Navbar, Hero, Billing, Stats } from "./components";
const App = () => {
  const [blog, setBlog] = useState(false);

  return (
    <div className=" w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Billing />
    </div>
  );
};

export default App;
