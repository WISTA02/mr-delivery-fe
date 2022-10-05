import React, { useState } from 'react';
import Pagination from './pagination';
import styles from './restaurant.module.css';
import { FcTodoList } from 'react-icons/fc';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useContext } from 'react';
import { AddCart_Create_Context } from '../context-api/card-context';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart_my, modifyquantity } from '../../redux/addToCart';

function MealsRestaurant() {
  const [menu, setMenu] = useState(true);

  const Select = useSelector((state) => state);

  const [Info, setInfo] = useState(false);
  const [card, setCard] = useState([
    {
      id: 1,
      image:
        'https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg',
      name: 'Sicilian Pizza',
      price: 10,
    },
    {
      id: 2,
      image:
        'https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg',
      name: 'Sicilian Pizza',
      price: 10,
    },
    {
      id: 3,
      image:
        'https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg',
      name: 'Sicilian Pizza',
      price: 10,
    },
    {
      id: 4,
      image:
        'https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg',
      name: 'Sicilian Pizza',
      price: 10,
    },
    {
      id: 5,
      image:
        'https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg',
      name: 'Sicilian Pizza',
      price: 10,
    },
    {
      id: 6,
      image:
        'https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg',
      name: 'Sicilian Pizza',
      price: 20,
    },
    {
      id: 7,
      image:
        'https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg',
      name: 'Sicilian Pizza',
      price: 20,
    },
    {
      id: 8,
      image:
        'https://assets.bonappetit.com/photos/5cd32ef32c3537178c3c8f03/1:1/w_2560%2Cc_limit/BA-Perfect-Pizza.jpg',
      name: 'Sicilian Pizza',
      price: 20,
    },
  ]);
  const [currnetPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(5);

  const CartContext = useContext(AddCart_Create_Context);

  const Dispatch = useDispatch();

  const handleMenu = () => {
    setMenu(true);
    setInfo(false);
  };
  const handleInfo = () => {
    setMenu(false);
    setInfo(true);
  };

  const Addcert = (e) => {
    const [image, id, name, price] = e.currentTarget
      .getAttribute('datatype')
      .split('###');

    let DataUse = {
      image: image,
      id: id,
      name: name,
      price: price,
      quantity: 1,
    };

    let Value = Select.addToCartSlice.allProduct.findIndex(
      (data) => data.id === DataUse.id
    );

    if (Value === -1) {
      Dispatch(Addtocart_my(DataUse));
    } else {
      Dispatch(modifyquantity(DataUse));
    }
  };

  console.log(CartContext.addTocart);
  const indexOfLastCard = currnetPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currnetCard = card.slice(indexOfFirstCard, indexOfLastCard);

  const cards = currnetCard.map(({ image, id, name, price }, idx) => (
    <div className={styles.card} key={idx}>
      <img src={image} alt='' className={styles['meal-img']} />
      <div className={styles['name-meal']}>
        <div className={styles['title-meal']}>{name}</div>
        <div className={styles['meal-price']}>{price}</div>
      </div>
      <input className={styles['input-num']} type='number' />
      <button
        onClick={Addcert}
        className={styles['order-btn']}
        whiletap={{ scale: 0.75 }}
        datatype={`${image}###${id}###${name}###${price}`}
      >
        Order Now
      </button>
    </div>
  ));

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={styles['all']}>
        <div className={styles['details']}>
          <div className={styles['title']}>All Details</div>
          <ul className={styles['list']}>
            <li onClick={handleMenu}>
              <FcTodoList /> Menu
            </li>
            <li onClick={handleInfo}>
              <BsInfoCircleFill />
              Restaurant Info
            </li>
          </ul>
        </div>
        {menu ? (
          <div className={styles['meal']}>
            <div className={styles['title']}>Categories</div>
            <div className={styles['btns']}>
              <button className={styles.btn}>Deals</button>
              <button className={styles.btn}>New Arrival</button>
            </div>
            <div className={styles['title']}>Pizza</div>
            {cards}
            <Pagination
              cardsPerPage={cardsPerPage}
              totalCards={card.length}
              paginate={paginate}
            />
          </div>
        ) : (
          <div className={styles['meal']}>
            <div className={styles['title']}>Restaurant Info</div>
            <div className={styles['info']}>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided.{' '}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MealsRestaurant;
