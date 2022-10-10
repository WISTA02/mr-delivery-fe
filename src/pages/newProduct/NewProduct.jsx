import axios from "axios";
import { useState } from "react";
import SelectRest from "../../components/Select/Select";
import Sidebar from "../../components/sidebar/Sidebar";
import "./newProduct.css";
// import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
/**{
   "name": "JFC",
   "delivery_fee": 2,
   "location": {"city" : "amman",
              "details" : ""
   
},
    "owner_id" : 7,
    "category": ["chicken", "pizza"],
    "image" : {
          "cover" : "hthtsa",
          "main" : "hrwea"
}

} */
export default function NewProduct() {
  const [cat, setCat] = useState([]);

  const handleCat = (category) => {
    console.log({ category });
    const x = [];
    setCat([]);
    category.forEach((e) => x.push(e.value));
    // x.push(x[x.length-1])
    setCat(x);
    console.log({ cat });
  };
  const createNewRest =async (rest) => {
    try {
    let url = `https://mr-delivery-wista.herokuapp.com/restaurant`;

      const response = await axios.post(url,rest , {
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
    let restName = e.target.restName.value.toString();

    let ownerId = e.target.ownerId.value;

    let imgCover = e.target.imgCover.value;

    let imgMain = e.target.imgMain.value;

    let location = e.target.location.value;

    let delivery_fee = e.target.delivery_fee.value;

    let rest = {
      name: restName,
      delivery_fee: delivery_fee,
      location: { city: location },
      owner_id: ownerId,
      category: cat,
      image: {
        cover: imgCover,
        main: imgMain,
      },
    };
    console.log({ rest });
    createNewRest((rest));
    setCat([]);

    e.target.reset();
  };

  return (
    <div className="sb">
      <Sidebar />
      <div className="newProduct">
        <h1 className="addProductTitle">New Restaurant</h1>
        <form className="addProductForm" onSubmit={handleCreate}>
          <div className="divdiv">
            <div>
              <div className="addProductItem">
                <label>Name</label>
                <input
                  type="text"
                  name="restName"
                  placeholder="Apple Airpods"
                />
              </div>

              <div className="addProductItem">
                <label>category</label>
                <SelectRest handleCat={handleCat} />
              </div>
              <div className="addProductItem">
                <label>Delivery Fee</label>
                <input type="number" name="delivery_fee" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Location</label>
                <input type="text" name="location" placeholder="Amman" />
              </div>
            </div>
            <div className="div2">
              <div className="addProductItem">
                <label>Owner ID</label>
                <input type="number" name="ownerId" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Image Cover</label>
                <input
                  type="url"
                  name="imgCover"
                  placeholder="https://example.com"
                />
              </div>
              <div className="addProductItem">
                <label>Image main</label>
                <input type="url" name="imgMain" placeholder="http://" />
              </div>
            </div>
          </div>
          <button id="change" className="addProductButton">
            <strong>Create</strong>{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
