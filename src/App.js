import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { actionType } from './context/reducer';
import { AnimatePresence } from 'framer-motion';
import {CartContainer, CreateContainer, Header,MainContainer} from './components';
import { useStateValue } from './context/StateProvider';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin.jsx';
import UserProfile from './components/Profile/UserProfile';
import About from './components/About/about';
import Home2 from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import WidgetLg from "./components/widgetLg-driver/WidgetLg";
import WidgetLg2 from "./components/widgetLg-rest/WidgetLg";
import Footer from './components/Footer/Footer'
import Contact from "./components/Contact/Contact";
import Restaurant from './components/restaurantPage/restaurant';
import { AddCart_DataProvider } from './components/context-api/card-context';
import { getAllRest, getAllFoodItems } from './api/api';
import OrderHistory from './components/OrderHistory/OrderHistory';

const App = () => {
  const [{  cartShow }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
    await getAllRest().then((data) => {
      dispatch({
        type: actionType.SET_REST_ITEMS,
        restItems: data,
      });
    });
};
  useEffect(() => {
    fetchData();
  }, []);

  return (
   
    <Provider store={store}>
      <AddCart_DataProvider>
        <AnimatePresence exitBeforeEnter>
          <div className='w-screen h-auto flex flex-col bg-primary'>
            <Header />
            {cartShow && <CartContainer />}
            {/* <Sidebar /> */}
            <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full x'>
              <Routes>
                <Route path='/*' element={<MainContainer />} />
                <Route path='/createItem' element={<CreateContainer />} />
                <Route path='/admin' element={<Home2 />}></Route>
                <Route path='/admin/driver' element={<WidgetLg />}></Route>
                <Route path='/admin/resturant' element={<WidgetLg2 />}></Route>
                <Route path='/Ordersapprove' element={<UserList />}></Route>
                <Route path='/driver-order' element={<ProductList />}></Route>
                <Route path='/product/:productId' element={<Product />}></Route>
                <Route path='/newproduct' element={<NewProduct />}></Route>
                <Route path='/contactus' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/userprofile' element={<UserProfile />} />
                <Route path='/restaurant' element={<Restaurant />} />
                <Route path='/orderhistory' element={<OrderHistory/>}/>
              </Routes>
            </main>
            <Footer />
          </div>
        </AnimatePresence>
      </AddCart_DataProvider>
    </Provider>
  );
};

export default App;
