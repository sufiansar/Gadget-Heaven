import React from "react";
// import bannerImg from "/assets/banner.PNG";
import bannerG from "/assets/Banner.png";

const Banner = () => {
  return (
    <div className=" text-center  mt-10 mb-28 ">
      <div className="bg-[#9538E2] h-[400px] space-y-6">
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
      </div>
      <div className=" -mt-24 md:-mt-40">
        <div className="flex flex-col items-center h-[600px]  ">
          <img className="w-full md:w-[900px] h-full" src={bannerG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
