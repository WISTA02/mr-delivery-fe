import React, { useState, useEffect } from 'react';
import Pagination from './pagination';
import styles from './restaurant.module.css';
import { FcTodoList } from 'react-icons/fc';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useContext } from 'react';
import { AddCart_Create_Context } from '../context-api/card-context';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart_my, modifyquantity } from '../../redux/addToCart';
import { Link, useParams } from "react-router-dom";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { getOneRest } from '../../api/api'
import { useStateValue } from "../../context/StateProvider";


function MealsRestaurant() {
  const [menu, setMenu] = useState(true);
  const [{ foodItems }] = useStateValue();

  const Select = useSelector((state) => state);
  const [data, setProduct] = useState([]);
  const [Info, setInfo] = useState(false);
  const { id } = useParams();
  // console.log('11111111111111111111', data);


  const getProduct = async () => {
    const response = await getOneRest(id);
    // console.log("1111111111", response);
    setProduct(response);
  };




  // console.log("............" + data);
  // console.log("*************************" + data.id);

  const [card, setCard] = useState([]);
  const [currnetPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(5);
  // console.log("$$$$$$$$$$$$$$$" + JSON.stringify(meal));

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

  // console.log(CartContext.addTocart);
  const indexOfLastCard = currnetPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currnetCard = card.slice(indexOfFirstCard, indexOfLastCard);



  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getMeals = async () => {
    console.log('///////////', foodItems);
    const food = await foodItems.filter(x => x.restaurant_id == id);

    console.log("2222222222", food);
    setCard(food);
  }

  useEffect(() => {
    getProduct();
    getMeals();
  }, [foodItems]);

  const cards = currnetCard.map(({ name, price, image, id }, idx) => (
    <div className={styles.card} key={idx}>
      <img src={image} alt='' className={styles['meal-img']} />
      <div className={styles['name-meal']}>
        <div className={styles['title-meal']}>{name}</div>
        <div className={styles['meal-price']}>{price}</div>
      </div>
      {/* <input className={styles['input-num']} type='number' /> */}
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
  return (
    <div className={styles.everything}>
      {/* {
        data.map((item, idx) => ( */}
      <div key={data?.id}>
        <img
          src={data?.image?.cover}
          alt={data?.name}
          className={styles['cover-image']}
        />
        <div className={styles['bar']}>
          <img src={data?.image?.main} alt='logo' className={styles.logo} />
          <div className={styles['res-name']}>{data?.name}</div>
          <div className={styles['res-address']}>
            <FaMapMarkerAlt className={styles.icon2} />
            <span>{data?.location?.details}</span>
          </div>
        </div>
      </div>
      {/* ))

      } */}
      <div className={styles['all']}>
        <div className={styles['details']}>
          <div className={styles['title']}>All Details</div>
          <ul className={styles['list']}>
            <li onClick={handleMenu} className={styles.icons}>
              <FcTodoList className={styles.icons2} />
              <span>Menu</span>
            </li>
            <li onClick={handleInfo} className={styles.icons}>
              <BsInfoCircleFill className={styles.icons2} />
              <span>Restaurant Info</span>
            </li>
          </ul>
        </div>
        {menu ? (
          <div className={styles['meal']}>
            <div className={styles['title']}>Available Meals</div>
            <div className={styles['btns']}></div>

            {cards}
            <div className={styles.pag}>
              <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={card.length}
                paginate={paginate}
              />
            </div>
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
    </div>
  );
}

export default MealsRestaurant;
