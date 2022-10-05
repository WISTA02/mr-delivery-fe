export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CARTITEMS: "SET_CARTITEMS",
  SET_MODAL_SHOW: "SET_MODAL_SHOW",
  SET_REST_ITEMS:"SET_REST_ITEMS",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };

    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
      case actionType.SET_MODAL_SHOW:
        return {
          ...state,
          modalShow: action.modalShow,
        };
    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };
      case actionType.SET_REST_ITEMS:
        return {
          ...state,
          restItems: action.restItems,
        };
    default:
      return state;
  }
};

export default reducer;
