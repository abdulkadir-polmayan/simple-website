import React from "react";
import {
  logo,
  twitter,
  linkedin,
  facebook,
  instagram,
} from "../assets/index.js";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <div>
      <div className="text-white p-5 flex flex-col lg:flex-row justify-around">
        <div className="hoobank flex flex-col pb-6 lg:items-center">
          <img src={logo} className="max-w-[300px] pb-5" />
          <p className="text-dimWhite leading-relaxed text-xl max-w-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            animi
          </p>
        </div>

        <div className="links flex flex-wrap ">
          <div className="useful min-w-[200px] pt-10">
            <h4 className="text-xl font-medium pb-1">useful links</h4>
            <ul>
              <li className="text-dimWhite pt-4">content</li>
              <li className="text-dimWhite pt-4">how ti wpkrs</li>
              <li className="text-dimWhite pt-4">how ti wpkrs</li>
              <li className="text-dimWhite pt-4">how ti wpkrs</li>
              <li className="text-dimWhite pt-4">how ti wpkrs</li>
            </ul>
          </div>
          <div className="community min-w-[200px] pt-10">
            <h4 className="text-xl font-medium pb-1">community</h4>
            <ul>
              <li className="text-dimWhite pt-4">how ti wpkrs</li>
              <li className="text-dimWhite pt-4">how ti wpkrs</li>
              <li className="text-dimWhite pt-4">how ti wpkrs</li>
              <li className="text-dimWhite pt-4">how ti wpkrs</li>
            </ul>
          </div>
          <div className="partner min-w-[200px] pt-10">
            <h4 className="text-xl font-medium pb-1">partnwe</h4>
            <ul>
              <li className="text-dimWhite pt-4">our partner</li>
              <li className="text-dimWhite pt-4">became partner</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between lg:flex-row items-center mx-10 mt-10 border-t border-t-slate-600 ">
          <h1 className="mt-6 text-white text-xl text-center">
            2021 hoobank all right reserved
          </h1>
          <div className="flex py-6 justify-center">
            <img className="mx-4 w-8" src={twitter} />
            <img className="mx-4 w-8" src={linkedin} />
            <img className="mx-4 w-8" src={facebook} />
            <img className="mx-4 w-8" src={instagram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
