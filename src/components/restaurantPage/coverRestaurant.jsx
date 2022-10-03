import React from 'react'
import styles from "./restaurant.module.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
function CoverRestaurant() {
    const restaurant = {
        name: "Tasty Food Pizza", logo: "https://marketplace.foodotawp.com/wp-content/uploads/2021/05/022.jpg", describtion: "",
        address: "1157 Broadway, New York City, United Kingdom (UK) - NY 10001-7796", cover: "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/broadway.jpg"
    }
    return (
        <>
            <img src={restaurant.cover} alt={restaurant.name} className={styles['cover-image']} />
            <div className={styles['bar']}>
                <img src={restaurant.logo} alt="logo" className={styles.logo} />
                <div className={styles['res-name']}>{restaurant.name}</div>
                <div className={styles['res-address']}><FaMapMarkerAlt />{restaurant.address}</div>
            </div>
        </>
    )
}

export default CoverRestaurant;