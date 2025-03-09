import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Laptop = () => {
  const [alldata, setData] = useState([]);
  //   console.log(alldata);
  useEffect(() => {
    fetch(`public/full_products.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const filterIngData = alldata?.filter(
    (gadget) => gadget.category == "Laptop"
  );
  return (
    <div className="text-black grid grid-cols-3 my-8 gap-6">
      {filterIngData?.map((gadget) => (
        <Gadget gadget={gadget} key={gadget.id}></Gadget>
      ))}
    </div>
  );
};

export default Laptop;
