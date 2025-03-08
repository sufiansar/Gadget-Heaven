import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Gadget from "../Gadget/Gadget";

const GadgetCards = () => {
  const [gadgets, setGadget] = useState([]);

  useEffect(() => {
    fetch(`/full_products.json`)
      .then((res) => res.json())
      .then((data) => setGadget(data));
  }, []);

  return (
    <div className="text-black mb-20">
      <h1 className="text-center text-5xl font-bold">
        Explore Cutting-Edge Gadgets
      </h1>
      <div>
        <div className="grid grid-cols-3 space-y-5">
          {gadgets.map((gadget, index) => (
            <Gadget gadget={gadget} key={index}></Gadget>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GadgetCards;
