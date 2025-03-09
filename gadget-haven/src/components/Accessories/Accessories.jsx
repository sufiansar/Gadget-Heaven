import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Accessories = () => {
  const [accessoriesData, setAccessoriesData] = useState([]);
  useEffect(() => {
    fetch(`/full_products.json`)
      .then((res) => res.json())
      .then((data) => setAccessoriesData(data));
  }, []);
  const filteringAccessories = accessoriesData.filter(
    (acc) => acc.category === "Accessories"
  );
  //   console.log(filteringAccessories);
  return (
    <div className="text-black grid grid-cols-3 my-8 gap-6">
      {filteringAccessories.map((gadget) => (
        <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
      ))}
    </div>
  );
};

export default Accessories;
