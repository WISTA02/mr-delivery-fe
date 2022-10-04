import "./productList.css";
import { DataGrid, DATA_GRID_PROPTYPES, getInitialGridColumnReorderState } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
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
      .put(`http://localhost:5000/driver/${id}`, bodyParameters, config)
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

//   axios.get(`http://localhost:5000/driver`,config)
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
    const response = await axios.get('http://localhost:5000/driver', {
      headers: {
        Authorization: `Bearer ${cookies.get('data').user.token}`
      }
    });
    // const updatedList = response.data.filter((x) => x.role === 'driver');
    response.data.map((element) => {
      element.all_items.forEach((e) => {
        orderDetails +=  orderDetails += e.quantity+ " " + e.name + ",";;
      });
      element.restaurant_location="Amman,str.abdallah-gosheh"
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
  useEffect(()=>{
    getOrder();
   },[statusOrder])
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
 
  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "product",
  //     headerName: "Product",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListItem">
  //           <img className="productListImg" src={params.row.img} alt="" />
  //           {params.row.name}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "stock", headerName: "Stock", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //   },
  //   {
  //     field: "price",
  //     headerName: "Price",
  //     width: 160,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
          
  //           <Link to={"/product/" + params.row.id}>
  //             <button className="productListEdit">Edit</button>
  //           </Link>
  //           <DeleteOutline
  //             className="productListDelete"
  //             onClick={() => handleDelete(params.row.id)}
  //           />
           
  //         </>
  //       );
  //     },
  //   },
  // ];
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // {
    //   field: "all_items",
    //   headerName: "Order",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
    //         {params.row.username}
    //       </div>
    //     );
    //   },
    // },
    { field: "all_items", headerName: "Order Details", width: 200 },
    { field: "restaurant_name", headerName: "Resturant", width: 130 },
    { field: "restaurant_location", headerName: "Location", width: 200 },


    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "total_price",
      headerName: "Total Price",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}> */}
              <button id="change"  onClick={() => handleChange(params.row.id)}>Change Statues</button>
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
      <Sidebar/>
    <div className="productList">
    <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        rowHeight={50}
      />
    </div>
    </div>
  );
}
