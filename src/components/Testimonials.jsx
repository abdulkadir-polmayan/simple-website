import React from "react";
import { people02 } from "../assets/index";

const Testimonials = () => {
  const peoples = (
    <div className="flex  hover:bg-slate-600 rounded-3xl transition  flex-col p-10 max-w-[370px] min-w-[370px]">
      <div className="text-9xl max-h-[80px]">"</div>
      <p className="text-xl leading-relaxed mb-8">
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
      </p>
      <div className="flex flex-row items-center">
        <img className="max-w-[50px] max-h-[50px] mr-5" src={people02} />
        <div>
          <h1 className="text-xl font-semibold">Steve Mark</h1>
          <h3 className="text-dimWhite">Founder</h3>
        </div>
      </div>
    </div>
  );
  return (
    <div className="bg-primary text-white font-poppins">
      <div className="header text-white flex item-center justify-around flex-col lg:flex-row p-10 lg:px-40 ">
        <h1 className="text-5xl leading-normal font-semibold pb-3 flex-1">
          What people are <br className="hidden lg:block"></br> saying about us
        </h1>
        <p className="text-dimWhite leading-relaxed text-xl max-w-md items-center flex flex-1 lg:pl-10">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="comments flex flex-wrap item-center justify-between lg:px-40">
        {peoples}
        {peoples}
        {peoples}
      </div>
    </div>
  );
};

export default Testimonials;
