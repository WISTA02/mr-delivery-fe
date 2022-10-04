import React from 'react';
import styles from './restaurant.module.css';
import CoverRestaurant from './coverRestaurant';
import MealsRestaurant from './mealsRestaurant';

function Restaurant() {
  return (
    <div className={styles['all-pages']}>
      <CoverRestaurant />
      <MealsRestaurant />
    </div>
  );
}

export default Restaurant;
