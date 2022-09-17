import React from "react";
import { card } from "../assets/index";

const CardDeal = () => {
  return (
    <div className=" bg-primary flex flex-col items-center lg:p-40 justify-center lg:flex-row">
      <div className="header text-white flex flex-col p-10 flex-1">
        <h1 className="text-5xl leading-normal font-semibold pb-3">
          You do the business, we’ll handle the money.
        </h1>
        <p className="text-dimWhite leading-relaxed text-xl max-w-md">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="py-4 max-w-[15rem] px-6 mt-9 font-poppins font-medium text-[18px] text-primary bg-white rounded-[10px] outline-none">
          Get started
        </button>
      </div>
      <div className="p-5 mt-10 flex-1">
        <img src={card} />
      </div>
    </div>
  );
};

export default CardDeal;
