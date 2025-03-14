import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { addstorecard, addWishlist } from "../Utilites/localstore";

const GadgetDetailes = () => {
  const { product_id } = useParams();
  const gadgetData = useLoaderData();
  const singleGadget = gadgetData?.find(
    (data) => data?.product_id === product_id
  );
  console.log(singleGadget);
  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating,
  } = singleGadget;

  const addTocart = (product_id) => {
    addstorecard(product_id);
  };
  const addToWishList = (product_id) => {
    addWishlist(product_id);
  };
  return (
    <div className="text-black">
      <div>
        <div className=" text-center  mt-10 mb-10 ">
          <div className="bg-[#9538E2] h-[400px] space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold pt-8">
              Product Detailas
            </h1>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className=" -mt-24 md:-mt-40 flex flex-col items-center mb-8 ">
        <div className="  md:w-[900px] md:h-[600px] bg-white md:flex w-full  rounded-3xl ">
          <div className="bg-[#D9D9D9] m-4 p-4 md:h-50 md:w-80 md:flex md:flex-col mt-50 items-center ">
            <img className="h-50 w-80 p-6" src={product_image} alt="" />
          </div>
          <div className="mt-10 ml-10 space-y-3">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p>Price {price}</p>
            <p className="text-[#09080F99]"> {description}</p>
            <div>
              <h1 className="text-black font-bold">Specification</h1>
              {Specification.map((data) => (
                <ul>
                  {" "}
                  <li className="text-[#09080F99]">{data}</li>
                </ul>
              ))}
            </div>
            <div>
              <h1>Rating</h1>
              {rating}
            </div>
            <div className="flex gap-6">
              <div className="flex gap-3">
                <button
                  onClick={() => addTocart(product_id)}
                  className="btn bg-purple-700 border-none"
                >
                  Add To Card <HiMiniShoppingCart />
                </button>
              </div>
              <div
                onClick={() => addToWishList(product_id)}
                className="btn bg-[#D9D9D9] text-black border-none mb-10"
              >
                <FaHeart></FaHeart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetailes;
