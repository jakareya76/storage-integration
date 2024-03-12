const Bottle = ({ bottle, handleAddToCart }) => {
  const { id, img, name, price } = bottle;
  return (
    <div className="p-5 bg-zinc-900 rounded">
      <img src={img} alt={id} className="w-[250px]" />
      <h2 className="text-white mt-4 font-semibold capitalize">{name}</h2>
      <div className="flex items-center justify-between mt-5">
        <button onClick={() => handleAddToCart(bottle)} className="btn">
          Add To Cart
        </button>
        <p className="text-xl text-white">${price}</p>
      </div>
    </div>
  );
};

export default Bottle;
