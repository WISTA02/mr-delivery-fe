import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [data, setData] = useState([]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
useEffect(()=>{
  axios({
    method: 'get',
    url: 'http://localhost:5000/order',
    // responseType: 'stream'
  })
    .then(function (response) {
     console.log(response.data);
     let arr=response.data;
     setData(arr)
    }).catch(e=>{console.log();});
},[])
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "all_items",
      headerName: "Order",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.row.username}
          </div>
        );
      },
    },
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
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
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
          pageSize={10}
          checkboxSelection
        />
      </div>
    </div>
  );
}
