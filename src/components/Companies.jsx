import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets/index";

const Companies = () => {
  return (
    <div className="bg-primary flex flex-wrap justify-between px-20 py-10 lg:py-20">
      <img className="object-contain flex m-5 w-[250px]" src={airbnb} />
      <img className="object-contain flex m-5 w-[250px]" src={binance} />
      <img className="object-contain flex m-5 w-[250px]" src={coinbase} />
      <img className="object-contain flex m-5 w-[250px]" src={dropbox} />
    </div>
  );
};

export default Companies;
