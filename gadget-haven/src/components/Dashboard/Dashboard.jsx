import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstorecard } from "../Utilites/localstore";
import PaymentSuccessModal from "../PaymentSuccessModal/PaymentSuccessModal";

const Dashboard = () => {
  const [cartListAll, setCartList] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [total, setTotal] = useState(0);
  const [sortby, setSortby] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const allGadgets = useLoaderData();

  useEffect(() => {
    const storGadget = getstorecard();

    const cartList = allGadgets?.filter((gadget) =>
      storGadget?.includes(gadget?.product_id)
    );

    if (sortby == "asc") {
      const sortedData = cartList.sort((a, b) => a.price - b.price);
      setCartList(sortedData);
    } else {
      setCartList(cartList);
    }
  }, [allGadgets, sortby]);

  useEffect(() => {
    const newTotal = cartListAll.reduce((acc, gadget) => acc + gadget.price, 0);
    setTotal(newTotal);
  }, [cartListAll]);

  const handleSort = () => {
    if (sortby) {
      setSortby("");
    } else {
      setSortby("asc");
    }
  };

  return (
    <div className="text-black">
      <div>
        <div className="text-center mt-10 mb-10">
          <div className="bg-[#9538E2] h-[300px] space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold pt-8">DashBoard</h1>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                className="btn btn-soft btn-accent"
                onClick={() => setShowCart(!showCart)}
              >
                Cart
              </button>
              <button className="btn btn-soft btn-accent">Wishlist</button>
            </div>
          </div>
        </div>

        {showCart && (
          <div className="container mx-auto px-4 py-8 mb-10">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">Cart</h1>
              <div className="flex gap-6">
                <h1 className="text-xl font-bold"> Total cost : {total} </h1>
                <button
                  onClick={handleSort}
                  className="btn bg-purple-700 rounded-2xl border-none"
                >
                  Sort by Price
                </button>
                <button
                  onClick={() => setIsVisible(true)}
                  className="btn bg-purple-500 rounded-2xl border-none"
                >
                  Purchase
                </button>
              </div>
            </div>
            {cartListAll.length > 0 ? (
              <div>
                {cartListAll.map((gadget) => (
                  <div className="flex gap-10 my-4  bg-white  p-4 justify-between">
                    <div>
                      <img
                        className="w-50 h-30 "
                        src={gadget.product_image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1>{gadget.product_title}</h1>
                      <p>{gadget.description}</p>
                      <p>{gadget.price}</p>
                    </div>
                    <button
                      onClick={() => {
                        setCartList(
                          cartListAll.filter(
                            (removeCart) =>
                              removeCart.product_id !== gadget.product_id
                          )
                        );
                      }}
                      className="btn"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">Your cart is empty</p>
            )}
          </div>
        )}
      </div>
      {isVisible && (
        <PaymentSuccessModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          total={total}
        />
      )}
    </div>
  );
};

export default Dashboard;
