import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  console.log(gadget);
  const { product_title, category, price, product_image } = gadget;
  return (
    <Link to={`/gadget ${category}`}>
      <div className="card bg-white text-black h-96  w-full md:w-84 shadow-sm">
        <figure className="bg-[#D9D9D9] m-4 p-4">
          <img className="h-40 w-60" src={product_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p> Price:- {price}$</p>
          <div className="card-actions ">
            <button className="btn btn-outline btn-accent rounded-3xl">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Gadget;
