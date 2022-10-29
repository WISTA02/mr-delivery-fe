import React, { useState } from 'react';

//use to create the context
export const AddCart_Create_Context = React.createContext();

export function AddCart_DataProvider(props) {
  const [addTocart, setAddtocart] = useState(
    window.localStorage.cartItems ? window.localStorage.cartItems : false
  );

  return (
    <AddCart_Create_Context.Provider value={{ addTocart, setAddtocart }}>
      {props.children}
    </AddCart_Create_Context.Provider>
  );
}
