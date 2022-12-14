import "./RestMeal.css"


import axios from "axios";
import { useState } from "react";
import SelectRest from "../../components/Select/Select";
import Sidebar from "../../components/sidebar/Sidebar";
// import "./newProduct.css";
// import axios from 'axios'
import Cookies from 'universal-cookie';
import { useParams } from "react-router-dom";
const cookies = new Cookies();


export default function RestMeal() {
  const [cat, setCat] = useState([]);
  const params = useParams();


  const handleCat = (category) => {
    console.log({ category });
    const x = [];
    setCat([]);
    category.forEach((e) => x.push(e.value));
    setCat(x);
    console.log({ cat });
  };
  const createNewRest = async (meal) => {
    try {

      let url = `https://mr-delivery-wista.herokuapp.com/meal/${params.id}`;

      const response = await axios.post(url, meal, {
        headers: {
          Authorization: `Bearer ${cookies.get('data').user.token}`
        }
      });
      alert("added")
      // setApprove(false)
      // return (response.data)
    } catch (err) {
      console.log(err);
    }
  };
  const handleCreate = (e) => {
    e.preventDefault();
    let restName = e.target.restName.value;



    let image = e.target.imgCover.value;





    let price = e.target.price.value;
    let description = e.target.description.value;


    let meal = {
      name: restName,
      price: price,
      flag: cat,
      description: description,
      image: image,
    };
    // console.log({ rest });
    createNewRest((meal));
    setCat([]);

    e.target.reset();
  };

  return (
    <div className="sb">
      <Sidebar />
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm" onSubmit={handleCreate}>
          <div className="divdiv">
            <div>
              <div className="addProductItem">
                <label>Name</label>
                <input
                  type="text"
                  name="restName"
                  placeholder="burger"
                />
              </div>

              <div className="addProductItem">
                <label>category</label>
                <SelectRest handleCat={handleCat} />
              </div>
              <div className="addProductItem">
                <label>Price</label>
                <input type="number" name="price" placeholder="123" />
              </div>

            </div>
            <div className="div2">
              <div className="addProductItem">
                <label>Description</label>
                <input type="text" name="description" placeholder="nice meal" />
              </div>
              <div className="addProductItem">
                <label>Image Cover</label>
                <input
                  type="url"
                  name="imgCover"
                  placeholder="https://example.com"
                />
              </div>

            </div>
          </div>
          <button id="change" className="addProductButton">
            <strong>Add Meal</strong>{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
