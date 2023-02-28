import React from "react";
import { routes } from "../../../routes";
import CartIconSVG from "../icons/CartIconSVG";

const Layout = () => {
  return (
    <nav className="w-full bg-white lg:px-10 lg:py-5 border-b-2 flex items-center justify-between">
      <a href="/products">
        <img
          src={require("../../assets/images/Logo.png")}
          // className="w-10 h-10"
          alt=""
        />
      </a>
      <div className="flex items-center gap-x-8 text-lg font-medium">
        {routes.map((route, index) => (
          <a href={route.path}>{route.title}</a>
        ))}
      </div>
      <button className="">
        <CartIconSVG />
      </button>
    </nav>
  );
};

export { Layout };
