// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import {Create } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "material-ui-search-bar";
import "./newMeal.css";
import Sidebar from "../sidebar/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [arr, setArr] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  async function getRest() {
    try {
      const response = await axios.get("http://localhost:5000/restaurant", {
        headers: {
          Authorization: `Bearer ${cookies.get("data").user.token}`,
        },
      });
      response.data.map((element) => {
        element.location = element.location.city;
      });
      setData(response.data);
      setArr(response.data)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getRest();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "name", width: 200 },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/restMeal/" + params.row.id}>
              <button id="change">Add Meal</button>
            </Link>
          </>
        );
      },
    },
  ];
  const handleSearch = (e) => {
    console.log(e);
    let arr2 = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.toUpperCase().includes(e.toString().toUpperCase())) {
        arr2.push(data[i]);
        console.log(data[i].name);
      }
    }
    
    arr2.length==0?setArr(data):setArr(arr2);
    setArr(arr2);
 
  };
  useEffect(() => {}, [arr,data]);
  
  return (
    <div className="sb">
      <Sidebar />

      <div className="userList">
        <SearchBar id="search" onChange={handleSearch} />
        <DataGrid id="grid"
          rows={arr}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </div>
  );
}
