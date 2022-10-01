import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CreateContainer, Header, MainContainer } from './components';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';
<<<<<<< HEAD
import  Signup  from './components/Signup/Signup';
import  Signin  from './components/Signin/Signin.jsx';
=======
import UserProfile from './components/Profile/UserProfile';
import EditProfile from './components/Profile/EditProfile';

>>>>>>> main

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

        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
<<<<<<< HEAD
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/createItem' element={<CreateContainer />} />
=======
            <Route path='/userprofile' element={<UserProfile/>}/>
            <Route path='/editprofile' element={<EditProfile/>}/>
>>>>>>> main
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;