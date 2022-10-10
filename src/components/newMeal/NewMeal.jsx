// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import {Create } from "@material-ui/icons";
import { DeleteOutline } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  async function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
    setArr(data)

    try {
      const response = await axios.delete(`http://localhost:5000/restaurant/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies.get("data").user.token}`,
        },
      });
      getRest()
      // setData(response.data);
      // setArr(response.data)
    } catch (err) {
      console.log(err);
    }
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
  useEffect(() => {
 
  }, [data]);
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
      width: 300,
      renderCell: (params) => {
        return (
          <>
          {/* <Link to={"/restMeal/" + params.row.id}>
              <button id="change">Edit</button>
            </Link> */}

            <Link to={"/restMeal/" + params.row.id}>
              <button id="change">Add Meal</button>
            </Link>
          
             <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />


          </>
        );
      },
    },
  ];
  const handleSearch = (e) => {
   
    let arr2 = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.toUpperCase().includes(e.toString().toUpperCase())) {
        arr2.push(data[i]);
      }
    }
    
    arr2.length==0?setArr(data):setArr(arr2);
    setArr(arr2);
 
  };
  useEffect(() => {}, [arr,data]);
  
  return (
    <div className="sb">
      <Sidebar />

      <div className="userList" id="grid">
        <div className="sb" id="sbb">
        <SearchBar id="search" onChange={handleSearch} />
        <button id="change" className="create-btn" onClick={()=> {navigate('/newproduct')}}>Create</button>

        </div>
        <DataGrid 
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
