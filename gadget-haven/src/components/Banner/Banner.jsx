import React from "react";
import bannerImg from "/assets/banner.jpg";

const Banner = () => {
  return (
    <div className=" text-center space-y-6 mt-10">
      <h1 className="text-3xl md:text-5xl font-bold">
        Upgrade Your Tech Accessorize with <br></br>Gadget Heaven Accessories
      </h1>
      <p>
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="bg-white px-6 p-2 rounded-2xl  btn border-none  text-[#9538E2] font-bold ">
        Shop Now
      </button>
      <div className="flex flex-col items-center bg-[#FFFFFF4D] p-4">
        <img className="w-[800px] h-[400px]" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
