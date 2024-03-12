import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addToStorage, getCartData } from "../utilities/storage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState(getCartData());

  const handleAddToCart = (bottle) => {
    const name = bottle.name;
    const img = bottle.img;
    const price = bottle.price;

    const shortData = { name, img, price, id: bottle.id };

    const newCart = [...cart, shortData];

    setCart(newCart);
    addToStorage(shortData);
  };

  useEffect(() => {
    const getBottleData = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();

      setBottles(data);
    };

    getBottleData();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-semibold">Bottles</h2>
      <div className="flex gap-5">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-8">
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
