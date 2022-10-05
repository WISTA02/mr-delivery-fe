import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';
import { AnimatePresence } from 'framer-motion';
import { CreateContainer, Header, MainContainer } from './components';
import { useStateValue } from './context/StateProvider';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin.jsx';
import UserProfile from './components/Profile/UserProfile';
import EditProfile from './components/Profile/EditProfile';
import About from './components/About/about';
import Home2 from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import WidgetLg from "./components/widgetLg-driver/WidgetLg";
import WidgetLg2 from "./components/widgetLg-rest/WidgetLg";
import Footer from './components/Footer/Footer'
import Contact from "./components/Contact/Contact";
import Restaurant from './components/restaurantPage/restaurant';
import OrderHistory from './components/OrderHistory/OrderHistory';
import SearchBar from './components/Searchbar';

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />

        {/* <Sidebar /> */}
        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full x'>
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/admin" element={<Home2 />}></Route>
            <Route path="/admin/driver" element={<WidgetLg />}></Route>
            <Route path="/admin/resturant" element={<WidgetLg2 />}></Route>
            <Route path="/Ordersapprove" element={<UserList />}></Route>
            <Route path="/user/:userId" element={<User />}></Route>
            <Route path="/newUser" element={<NewUser />}></Route>
            <Route path="/driver-order" element={<ProductList />}></Route>
            <Route path="/product/:productId" element={<Product />}></Route>
            <Route path="/newproduct" element={<NewProduct />}></Route>
            <Route path="/contactus" element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/ser' element={<NewMeal />} />

            <Route path='/userprofile' element={<UserProfile />} />
            <Route path='/editprofile' element={<EditProfile />} />
            <Route path='/restaurant' element={<Restaurant />} />
            <Route path='/orderhistory' element={<OrderHistory/>} />
          </Routes>
         
        </main>

      </div>
        <Footer />
    </AnimatePresence>
  );
};

export default App;
