import React, { useEffect } from 'react'
import { useStateValue } from "../../context/StateProvider";
import Modal from '../Modal/Modal'
import styles from './restaurant.module.css';
import CoverRestaurant from './coverRestaurant';
import MealsRestaurant from './mealsRestaurant';

function Restaurant() {
  const [{ modalShow, restItems, foodItems }] = useStateValue();

  useEffect(() => { }, [modalShow]);
  return (
    <div className={styles['all-pages']}>
      <MealsRestaurant data={restItems} meal={foodItems} />
      {modalShow && <Modal />}
    </div>
  );
}

export default Restaurant;
