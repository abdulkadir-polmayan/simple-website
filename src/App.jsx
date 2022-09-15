import styles from "./styles";
import { useState } from "react";
import { Navbar, Hero, Billing } from "./components";
const App = () => {
  const [blog, setBlog] = useState(false);

  return (
    <div className=" w-full overflow-hidden">
      <Navbar />
      <Hero />

      <div className="hidden bg-primary sm:px-16 px-6 flex justify-center items-center ">
        <div className="flex justify-center items-start"></div>
      </div>

      <div className="p-10 flex justify-center items-center grid text-center">
        <img
          src="https://images.unsplash.com/photo-1663106516321-2575f0dfd562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt=""
          className=""
        />
        <h1 className="p-3 backdrop-blur-sm drop-shadow-lg bg-white bg-opacity-20 m-[-5rem] font-extrabold text-3xl ">
          this is simple blog post
        </h1>
        <button
          className="m-6"
          onClick={() => {
            setBlog((prev) => !prev);
          }}
        >
          open blog
        </button>
        <p className={` ${blog ? "flex" : "hidden"}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
          rem laudantium nulla libero? Ratione reiciendis sint nulla
          necessitatibus quia repudiandae asperiores qui tenetur, in ducimus
          vero harum possimus explicabo.
        </p>
      </div>

      <div className="p-10 flex justify-center items-center grid text-center">
        <img
          src="https://images.unsplash.com/photo-1663121679412-9eeff30ef817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className=""
        />
        <h1 className="p-3 backdrop-blur-sm drop-shadow-lg bg-white bg-opacity-20 m-[-5rem] font-extrabold text-3xl ">
          this is simple blog post
        </h1>
        <button className="m-6">open blog</button>
        <p className={` ${blog ? "hidden" : "hidden"} wrap`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga
          rem laudantium nulla libero? Ratione reiciendis sint nulla
          necessitatibus quia repudiandae asperiores qui tenetur, in ducimus
          vero harum possimus explicabo.
        </p>
      </div>

      <Billing />
    </div>
  );
};

export default App;
