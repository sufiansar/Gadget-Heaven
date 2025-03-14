import React from "react";
import Utilites from "../Utilites/Utilites";
import Gadget from "../Gadget/Gadget";

const SmartWatches = () => {
  const alldata = Utilites();
  const smartWatchesData = alldata.filter(
    (swdata) => swdata.category == "Smart Watches"
  );

  return (
    <div className="text-black grid grid-cols-3 my-8 gap-6">
      {smartWatchesData.map((gadget) => (
        <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
      ))}
    </div>
  );
};

export default SmartWatches;
