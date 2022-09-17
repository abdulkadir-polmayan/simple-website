import React from "react";
import { google, apple, bill } from "../assets/index";

const Billing = () => {
  return (
    <div className="bg-primary text-white flex flex-col-reverse lg:flex-row">
      <div className="cards flex-1 p-10">
        <img src={bill} />
      </div>
      <div className="heading flex-1">
        <div className="header font-poppins flex flex-col p-5 flex-1">
          <h1 className="text-5xl leading-normal font-semibold pb-3">
            Easily control your billing & invoicing.
          </h1>
          <p className="text-dimWhite leading-relaxed text-xl max-w-md">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
        </div>
        <div className="stores flex">
          <img className="mx-5 my-3" src={google} />
          <img src={apple} />
        </div>
      </div>
      <div className="cards"></div>
    </div>
  );
};

export default Billing;
