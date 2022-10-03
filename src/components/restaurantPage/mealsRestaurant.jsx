import React, { useState, useEffect } from 'react'
import Pagination from './pagination'
import styles from "./restaurant.module.css"
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import { FcTodoList } from 'react-icons/fc'
import { BsInfoCircleFill } from 'react-icons/bs'

function MealsRestaurant() {
    const [menu, setMenu] = useState(true);
    const [Info, setInfo] = useState(false);
    const [card, setCard] = useState([{
        image: "https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg",
        name: "Sicilian Pizza", price: "£1,200.00"
    }, {
        image: "https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg",
        name: "Sicilian Pizza", price: "£1,200.00"
    }, {
        image: "https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg",
        name: "Sicilian Pizza", price: "£1,200.00"
    }, {
        image: "https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg",
        name: "Sicilian Pizza", price: "£1,200.00"
    }, {
        image: "https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg",
        name: "Sicilian Pizza", price: "£1,200.00"
    }, {
        image: "https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg",
        name: "Sicilian Pizza", price: "£1,000.00"
    }, {
        image: "https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg",
        name: "Sicilian Pizza", price: "£1,000.00"
    }, {
        image: "https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg",
        name: "Sicilian Pizza", price: "£1,000.00"
    }]);
    const [loading, setLoading] = useState(false);
    const [currnetPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(5);


    const handleMenu = () => {
        setMenu(true);
        setInfo(false);
    }
    const handleInfo = () => {
        setMenu(false);
        setInfo(true);
    }


    const indexOfLastCard = currnetPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currnetCard = card.slice(indexOfFirstCard, indexOfLastCard);

    const cards = currnetCard.map((e, idx) => (
        <div className={styles.card} key={idx}>
            <img src={e.image} alt="image" className={styles['meal-img']} />
            <div className={styles['name-meal']}>
                <div className={styles['title-meal']}>{e.name}</div>
                <div className={styles['meal-price']}>{e.price}</div>
            </div>
            <input className={styles['input-num']} type="number" />
            <button onClick={() => setItems([...cartItems, e])} className={styles['order-btn']} whileTap={{ scale: 0.75 }}>Order Now</button>
        </div>
    ))

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [items, setItems] = useState([]);

    const [{ cartItems }, dispatch] = useStateValue();

    const addtocart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        });
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    useEffect(() => {
        addtocart();
    }, [items]);
    return (
        <>
            <div className={styles['all']}>
                <div className={styles['details']}>
                    <div className={styles['title']}>All Details</div>
                    <ul className={styles['list']}>
                        <li onClick={handleMenu}><FcTodoList /> Menu</li>
                        <li onClick={handleInfo}><BsInfoCircleFill />Restaurant Info</li>
                    </ul>

                </div>
                {menu ? <div className={styles['meal']}>
                    <div className={styles['title']}>Categories</div>
                    <div className={styles['btns']}>
                        <button className={styles.btn}>Deals</button>
                        <button className={styles.btn}>New Arrival</button>
                    </div>
                    <div className={styles['title']}>Pizza</div>
                    {cards}
                    <Pagination cardsPerPage={cardsPerPage} totalCards={card.length} paginate={paginate} />
                </div> :
                    <div className={styles['meal']}>
                        <div className={styles['title']}>Restaurant Info</div>
                        <div className={styles['info']}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. </div>

                    </div>

                }
            </div>

        </>
    )
}

export default MealsRestaurant;