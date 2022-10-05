import React, { useEffect } from 'react'
import { useStateValue } from "../../context/StateProvider";
import Modal from '../Modal/Modal'
import styles from './restaurant.module.css';
import CoverRestaurant from './coverRestaurant';
import MealsRestaurant from './mealsRestaurant';

function Restaurant() {
  const [{ modalShow }] = useStateValue();
  useEffect(() => { }, [modalShow]);
  return (
    <div className={styles['all-pages']}>
      <CoverRestaurant />
      <MealsRestaurant />
      {modalShow && <Modal />}
    </div>
  );
}

export default Restaurant;
