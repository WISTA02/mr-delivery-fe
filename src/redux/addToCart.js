import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  allProduct: [],
  quentety: 1,
};

if (window.localStorage.AddToCart) {
  initialState.value = JSON.parse(window.localStorage.AddToCart).value;
  initialState.allProduct = JSON.parse(
    window.localStorage.AddToCart
  ).allProduct;
}

export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    Addtocart_my: (state, action) => {
      state.value = state.value += 1;
      state.allProduct = [...state.allProduct, action.payload];
      window.localStorage.AddToCart = JSON.stringify(state);
    },
    removeFromCart: (state, action) => {
      state.allProduct = state.allProduct.filter(
        (a, i) => a.id !== action.payload
      );
      window.localStorage.AddToCart = JSON.stringify(state);
    },
    clearAll: (state) => {
      state.value = 0;
      state.allProduct = [];
      window.localStorage.AddToCart = JSON.stringify(state);
    },
    modifyquantity: (state, action) => {
      //Find index of specific object using findIndex method.
      const objIndex = state.allProduct.findIndex(
        (obj) => obj.id === action.payload.id
      );
      let newnumber = Number(state.allProduct[objIndex].quantity);

      newnumber += 1;
      state.allProduct[objIndex].quantity = newnumber;
      window.localStorage.AddToCart = JSON.stringify(state);
    },
    modifyquantitydecrese: (state, action) => {
      //Find index of specific object using findIndex method.
      const objIndex = state.allProduct.findIndex(
        (obj) => obj.id === action.payload.id
      );
      let newnumber = Number(state.allProduct[objIndex].quantity);
      newnumber -= 1;
      state.allProduct[objIndex].quantity = newnumber;
      window.localStorage.AddToCart = JSON.stringify(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  Addtocart_my,
  removeFromCart,
  modifyquantity,
  modifyquantitydecrese,
  clearAll,
} = addToCartSlice.actions;

export default addToCartSlice.reducer;
