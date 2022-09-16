import React from "react";
import { robot } from "../assets/index";
const Hero = () => {
  return (
    <section className="md:grid md:grid-cols-2 py-10 bg-primary">
      <div className="mb-20 rounded-lg p-5  ">
        <div className="flex justify-center md:justify-start items-center my-10">
          <p className="bg-indigo-900 text-lg  px-2 text-center text-white rounded flex">
            discount for one motnh
          </p>
        </div>
        <div>
          <h1 className="font-semibold md:text-7xl md:text-left text-5xl text-center text-yellow-100">
            the next <br />
            <span className="text-white">Generation</span>
            <br />
            payment
            <br className="md:hidden" /> method
          </h1>
        </div>
      </div>
      <div className=" flex my-3 rounded-lg  ">
        <img src={robot} className="w-full h-full" />
      </div>
    </section>
  );
};

export default Hero;
