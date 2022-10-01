import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import axios from "axios";

export default function ProductList() {
  const [data, setData] = useState([]);


  useEffect(()=>{

    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };
  
    // const bodyParameters = {
    //   statusOrder,
    // };
  
    axios.put(`http://localhost:5000/driver'`)
      .then((data) => {
       setData(data.data)
      })
      .catch((e) => {
        console.log(e);
      });
  },[])
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
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "total_price",
      headerName: "Total Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}> */}
              <button className="userListEdit" >Change Statues</button>
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
        pageSize={8}
        checkboxSelection
      />
    </div>
    </div>
  );
}
