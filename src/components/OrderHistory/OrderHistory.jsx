
import "./OrderHistory.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function OrderHistory() {
  const [data, setData] = useState([]);
  const [statusOrder, setStatusOrder] = useState("");
 

  const handleChange = (id) => {
    console.log({id});
    const config = {
      headers: { Authorization: `Bearer ${cookies.get("data").user.token}` },

    };
    const bodyParameters = {
      statusOrder,
    };
    console.log(`http://localhost:5000/order/${id}`);
    axios
      .get(`http://localhost:5000/order/${id}`, config)
      .then((data) => {
        console.log(data.data.status);
        let x = data.data.status;
        setStatusOrder(x);
        console.log({statusOrder});
      })
      .catch((e) => {
        console.log(e);
      });
  };

  async function getOrder() {
    try {
      let  orderDetails = "";
      const response = await axios.get("http://localhost:5000/user-history", {
        headers: {
          Authorization: `Bearer ${cookies.get("data").user.token}`,
        },
      });
      response.data.map((element) => {
        element.all_items.forEach((e) => {
          orderDetails += e.quantity+ " " + e.name + ",";
        });
        element.all_items = orderDetails.slice(0, -1);;
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
    getOrder();
  }, [statusOrder]);
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
 
    { field: "all_items", headerName: "Order Details", width: 200 
  },

    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 200,
    // },
    {
      field: "total_price",
      headerName: "Total Price",
      width: 160,
      
    },
    
  { field: "order Status", headerName: "Show Status", width: 300 ,
  renderCell: (params) => {
    return (
<>
<label htmlFor="my-modal-3" className=" modal-button w-3 bg-white-500 hover:bg-yellow-400  text-sm text-yellow-400 " onClick={() => handleChange(params.row.id)}>Show Status</label>
<input type="checkbox" id="my-modal-3" className="modal-toggle " />
<div className="modal">
  <div className="modal-box relative">

  <label htmlFor="my-modal-3" className="bg-black  btn-sm rounded-md p-2 inline-flex items-center justify-center text-white hover:text-black-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset ">✕</label>
              
    <h3 className="text-lg   bg-yellow-300 text-center">Status order</h3>
    <p className="py-4 text-lg  text-black text-center"> {statusOrder}</p>
  <div className="flex-none">


  <button  class=" text-gray-800  py-2 px-2  w-40">
   <Link to="/orderhistory">Refresh</Link>
   
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
          columns={columns}
          pageSize={20}
          checkboxSelection
        />
      </div>
    </div>
  );
}