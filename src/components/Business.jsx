import React from "react";
import { star } from "../assets/index";
import { features } from "../constants";

const Business = () => {
  const FeatureCard = (props) => (
    <div className="feature flex flex-row my-5 max-w-xl ">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-600">
        <img className="object-contain" src={props.icon} />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h1 className="text-2xl font-semibold">{props.title}</h1>
        <p className="text-dimWhite max-w-sm leading-relaxed">
          {props.content}
        </p>
      </div>
    </div>
  );
  return (
    <div className="business bg-primary font-poppins lg:px-40 flex flex-col lg:flex-row   text-white pt-20 p-5">
      <div className="header flex flex-col p-5 flex-1">
        <h1 className="text-6xl leading-normal font-extrabold pb-3">
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
      <div className="features flex ml-5 lg:ml-20 max-w-1xl flex-col flex-1 lg:items-center justify-center">
        {features.map((item, index) => (
          <FeatureCard
            icon={item.icon}
            title={item.title}
            content={item.content}
            index={index}
            key={item.key}
          />
        ))}
      </div>
    </div>
  );
};

export default Business;
