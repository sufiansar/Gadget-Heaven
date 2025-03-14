import { useState, useEffect } from "react";

const Utilites = () => {
  const [alldata, setData] = useState([]);

  useEffect(() => {
    fetch("/public/full_products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return alldata;
};

export default { Utilites };
