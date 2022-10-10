export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};


export const fetchAddToCart = () => {
  const cartInfo =
    localStorage.getItem("AddToCart") !== "undefined"
      ? JSON.parse(localStorage.getItem("AddToCart"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};
