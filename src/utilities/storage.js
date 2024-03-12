const getCartData = () => {
  const cartStr = localStorage.getItem("cart");

  if (cartStr) {
    return JSON.parse(cartStr);
  }

  return [];
};

const addToStorage = (item) => {
  const cart = getCartData();
  cart.push(item);

  const cartStr = JSON.stringify(cart);
  localStorage.setItem("cart", cartStr);
};

export { addToStorage, getCartData };
