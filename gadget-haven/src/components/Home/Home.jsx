import React from "react";
import Banner from "../Banner/Banner";
import GadgetCards from "../GadgetCards/GadgetCards";

const Home = () => {
  return (
    <div>
      <div className="-mt-10  w-auto">
        <Banner></Banner>
      </div>
      <GadgetCards></GadgetCards>
    </div>
  );
};

export default Home;
