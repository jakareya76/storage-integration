import { useEffect, useState } from "react";
import Bottle from "./Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  useEffect(() => {
    const getBottleData = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();

      setBottles(data);
    };

    getBottleData();
  }, []);

  const url =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg";

  return (
    <>
      <h2 className="text-3xl font-semibold">Bottles</h2>
      <div className="flex gap-5">
        <div className="">
          <div className="grid grid-cols-3 gap-5 my-8">
            {bottles.map((bottle) => {
              return (
                <Bottle
                  key={bottle.id}
                  bottle={bottle}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-8 w-[250px]">
          <h2 className="text-xl font-semibold">Cart: {cart.length}</h2>

          {cart.map((item) => {
            console.log(item);
            return (
              <div key={item.id} className="my-5 flex gap-4">
                <img src={item.img} alt="" className="w-16 rounded-lg" />
                <div>
                  <h2>{item.name}</h2>
                  <p>price: ${item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Bottles;
