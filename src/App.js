import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { CreateContainer, Header, MainContainer } from "./components";
// import { useStateValue } from "./context/StateProvider";
// import { getAllFoodItems } from "./utils/firebaseFunctions";
// import { actionType } from "./context/reducer";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CreateContainer, Header, MainContainer } from './components';
import { useStateValue } from './context/StateProvider';
// import { getAllFoodItems } from './utils/firebaseFunctions';
// import { actionType } from './context/reducer';
import  Signup  from './components/Signup/Signup';
import  Signin  from './components/Signin/Signin.jsx';
import UserProfile from './components/Profile/UserProfile';
import EditProfile from './components/Profile/EditProfile';
import About from './components/About/about';


// import Sidebar from "./components/sidbar";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
// import "./App.css";
import Home2 from "./pages/home/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import WidgetLg from "./components/widgetLg/WidgetLg";
import Footer from './components/Footer/Footer'
import Contact from "./components/Contact/Contact";
const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    // await getAllFoodItems().then((data) => {
    //   dispatch({
    //     type: actionType.SET_FOOD_ITEMS,
    //     foodItems: data,
    //   });
    // });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full x">
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/admin" element={<Home2 />}></Route>
            <Route path="/Ordersapprove" element={<UserList />}></Route>
            <Route path="/user/:userId" element={<User />}></Route>
            <Route path="/newUser" element={<NewUser />}></Route>
            <Route path="/driver-order" element={<ProductList />}></Route>
            <Route path="/product/:productId" element={<Product />}></Route>
            <Route path="/newproduct" element={<NewProduct />}></Route>
            <Route path="/g" element={<WidgetLg/> }></Route>
            <Route path="/contactus" element={<Contact/>}/>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/about' element={<About />}/>
            <Route path='/createItem' element={<CreateContainer />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/createItem' element={<CreateContainer />} />
            <Route path='/userprofile' element={<UserProfile/>}/>
            <Route path='/editprofile' element={<EditProfile/>}/>
          </Routes>
            <Footer/>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
