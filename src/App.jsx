import styles from "./styles";
import React from "react";
import { Navbar, Hero, Billing } from "./components";
const App = () => (
  <div className=" w-full overflow-hidden">
    <Navbar />
    <Hero />

    <div className="hidden bg-primary sm:px-16 px-6 flex justify-center items-center ">
      <div className="flex justify-center items-start"></div>
    </div>

    <Billing />
  </div>
);

export default App;
