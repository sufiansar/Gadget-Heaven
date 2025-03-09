import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Gadget from "../Gadget/Gadget";

const GadgetCards = () => {
  const [gadgets, setGadget] = useState([]);

  useEffect(() => {
    fetch(`/full_products.json`)
      .then((res) => res.json())
      .then((data) => setGadget(data));
  }, []);

  return (
    <div className="text-black mb-20 ">
      <h1 className="text-center text-5xl font-bold">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="md:flex bg- ">
        <div className="md:w-60 bg-white mt-10 mr-4 md:h-[500px] flex flex-col items-center gap-4">
          <Link className="hover:bg-purple-600 btn border-none mt-8 mx-4 w-30">
            All Product
          </Link>
          <Link
            to={"laptop"}
            className="hover:bg-purple-600 btn border-none mx-4 w-30"
          >
            Laptops
          </Link>
          <Link
            to={"/phone"}
            className="hover:bg-purple-600 btn border-none mx-4 w-30"
          >
            Mobiles
          </Link>
          <Link
            to={"/accessories"}
            className="hover:bg-purple-600 btn border-none mx-4 w-30"
          >
            Accessories
          </Link>
          <Link className="hover:bg-purple-600 btn border-none mx-4 w-30">
            Smart Watches
          </Link>
          <Link className="hover:bg-purple-600 btn border-none mx-4 w-30">
            MacBook
          </Link>
          <Link className="hover:bg-purple-600 btn border-none mx-4 w-30">
            Iphone
          </Link>
        </div>
        <div className="grid mt-10  md:grid-cols-3 space-y-4 gap-4">
          {gadgets.map((gadget, index) => (
            <Gadget gadget={gadget} key={index}></Gadget>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GadgetCards;
