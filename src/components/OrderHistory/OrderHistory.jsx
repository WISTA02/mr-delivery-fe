import "./OrderHistory.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";


const cookies = new Cookies();

export default function OrderHistory() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);
  const [statusOrder, setStatusOrder] = useState("");
  const [id, setID] = useState();

  const handleChange = (id) => {
    console.log("*************", id);
    setID(id);
    const config = {
      headers: { Authorization: `Bearer ${cookies.get("data").user.token}` },
    };
    // console.log(`https://mr-delivery-wista.herokuapp.com/order/${id}`);
    axios
      .get(`https://mr-delivery-wista.herokuapp.com/order/${id}`, config)
      .then((data) => {
        console.log(data.data.status);
        let x = data.data.status;
        setStatusOrder(x);
        console.log({ statusOrder });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleChange2 = (id) => {
    console.log("222222222 ", id);
    const config = {
      headers: { Authorization: `Bearer ${cookies.get("data").user.token}` },
    };
    // console.log(`https://mr-delivery-wista.herokuapp.com/order/${id}`);
    axios
      .get(`https://mr-delivery-wista.herokuapp.com/order/${id}`, config)
      .then((data) => {
        console.log(data.data.status);
        let x = data.data.status;
        setStatusOrder(x);
        console.log({ statusOrder });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  async function getOrder() {
    try {
      let orderDetails = "";
      const response = await axios.get(
        "https://mr-delivery-wista.herokuapp.com/user-history",
        {
          headers: {
            Authorization: `Bearer ${cookies.get("data").user.token}`,
          },
        }
      );
      response.data.map((element) => {
        element.all_items.forEach((e) => {
          orderDetails += e.quantity + " " + e.name + ",";
        });
        element.all_items = orderDetails.slice(0, -1);
        orderDetails = "";
      });
      setData(response.data);
      // setStatusOrder("")
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getOrder();
  }, []);
  useEffect(() => {
    // getOrder();
  }, [statusOrder]);
  const columns = [
    { field: "id", headerName: "ID", width: 150,sortable: false },

    { field: "all_items", headerName: "Order Details", width: 200,sortable: false },

    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 200,
    // },
    {
      field: "total_price",
      headerName: "Total Price",
      width: 160,
      sortable: false
    },

    {
      field: "order Status",
      headerName: "Show Status",
      width: 300,
      renderCell: (params) => {
        return (
        
          <>
            <label
              htmlFor="my-modal-3"
              className=" modal-button w-3 bg-white-500 hover:bg-yellow-400  text-l text-yellow-400 "
              onClick={() => handleChange(params.row.id)}
            >
              Show Status
            </label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle " />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="bg-black  btn-sm rounded-md p-2 inline-flex items-center justify-center text-white hover:text-black-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset "
                >
                  ✕
                </label>

                <h3 className="text-lg  font-bold  bg-yellow-300 text-center">
                  Status order  {id} 
                </h3>
                <p className="py-4 text-lg font-bold  text-black text-center">
                  {" "}
                   {statusOrder}
                </p>
                <div className="divOrder">
                  <button
                    className="orderButton text-gray-800 py-2 px-2  w-20"
                    onClick={() => handleChange(id)}
                  >
                    Refresh
                  <svg xmlns="http://www.w3.org/2000/svg" height="20"  width="20" className="svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div className="sb">
      <Sidebar></Sidebar>
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={[...columns, { field: 'id', sortable: false }]}
          pageSize={20}
          checkboxSelection
        />
      </div>
    </div>
  );
}
