import { useState } from "react";
import { logo, close, menu,people03 } from "../assets";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const linksDesktop = navLinks.map((item, index) => (
    <li
      key={item.id}
      className={`text-[16px] ml-10 text-white font-poppins font-normal
        ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} cursor-pointer`}
    >
      <a href={`#${item.id}`}>{item.title}</a>
    </li>
  ));
  const linksMobile = navLinks.map((item, index) => (
    <li
      key={item.id}
      className={`text-[16px] text-white font-poppins font-normal
        ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} cursor-pointer`}
    >
      <a href={`#${item.id}`}>{item.title}</a>
    </li>
  ));

  return (
    <div className="bg-primary px-6 pt-3 pb-3 flex justify-center items-center">
      <nav className=" w-full flex justify-between items-center">
        <img src={people03} className="w-12" />
        <ul className="list-none flex justify-end item-center sm:flex hidden">
          {linksDesktop}
        </ul>


        <div className="sm:hidden flex">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="object-contain w-7 h-7"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } bg-slate-400 absolute right-0 top-[4.5rem] p-6 min-w-5`}
          >
            <ul>
              {linksMobile}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
