import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function ProductList() {
  const [data, setData] = useState([]);
  const [statusOrder, setStatus] = useState("Approved");

  const handleChange = (id) => {
    const config = {
      headers: { Authorization: `Bearer ${cookies.get("data").user.token}` },
    };
    const bodyParameters = {
      statusOrder,
    };
    axios
      .put(`https://mr-delivery-wista.herokuapp.com/driver/${id}`, bodyParameters, config)
      .then((data) => {
        console.log(data.data);
        setStatus(data.data.status);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // const getOrder=()=>{
  //   const config = {
  //     headers: { Authorization: `Bearer ${cookies.get('data').user.token}` },
  //   };

  //   // const bodyParameters = {
  //   //   statusOrder,
  //   // };

  //   axios.get(`https://mr-delivery-wista.herokuapp.com/driver`,config)
  //     .then((data) => {
  //      setData(data.data)
  //      console.log(data.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // } 
  async function getOrder() {
    try {
      let orderDetails = "";
      const response = await axios.get('https://mr-delivery-wista.herokuapp.com/driver', {
        headers: {
          Authorization: `Bearer ${cookies.get('data').user.token}`
        }
      });
      // const updatedList = response.data.filter((x) => x.role === 'driver');
      response.data.map((element) => {
        element.all_items.forEach((e) => {
          orderDetails += orderDetails += e.quantity + " " + e.name + ",";;
        });
        element.restaurant_location = "Amman,str.abdallah-gosheh"
        element.all_items = orderDetails.slice(0, -1);;
        orderDetails = "";
      });
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getOrder();

  }, []);
  useEffect(() => {
    getOrder();
  }, [statusOrder])
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90, sortable: 'desc' },
    { field: "all_items", headerName: "Order Details", width: 200, sortable: false },
    { field: "restaurant_name", headerName: "Resturant", width: 130, sortable: false },
    { field: "restaurant_location", headerName: "Location", width: 200, sortable: false },


    {
      field: "status",
      headerName: "Status",
      width: 200,
      sortable: false
    },
    {
      field: "total_price",
      headerName: "Total Price",
      width: 100,
      sortable: false
    },
    {
      field: "action",
      headerName: "Action",
      width: 150, sortable: false,
      renderCell: (params) => {
        return (
          <>

            <button id="change" onClick={() => handleChange(params.row.id)}>Change Statues</button>
            {/* </Link> */}
            {/* <DeleteOutline
              classNa me="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];
  return (
    <div className="sb">
      <Sidebar />
      <div className="productList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={[...columns, { field: 'id', sortable: false }]}

          pageSize={10}
          checkboxSelection
          rowHeight={50}
        />
      </div>
    </div>
  );
}
