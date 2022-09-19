import React from "react";

const Try = () => {
  return (
    <div className="bg-slate-700 m-20 rounded-3xl p-3 text-white flex flex-col lg:flex-row">
      <div className="header flex justify-center item-center flex-col flex-1 p-10">
        <h1 className="text-5xl leading-normal font-semibold pb-3">
          You do the business, we’ll.
        </h1>
        <p className="text-dimWhite leading-relaxed text-xl max-w-xl">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
      </div>
      <div className="flex lg:mx-40 items-center justify-center">
        <button className="py-4 max-w-[15rem] px-6  font-poppins font-medium text-[18px] text-primary bg-white rounded-[10px] outline-none">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Try;
