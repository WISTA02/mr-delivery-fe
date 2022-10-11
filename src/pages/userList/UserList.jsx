import "./userList.css";
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

export default function UserList() {
  const [data, setData] = useState([]);
  const [statusOrder, setStatus] = useState("Approved");
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const handleChange = (id) => {
    const config = {
      headers: { Authorization: `Bearer ${cookies.get("data").user.token}` },
    };
    const bodyParameters = {
      statusOrder,
    };
    axios
      .put(`https://mr-delivery-wista.herokuapp.com/owner/${id}`, bodyParameters, config)
      .then((data) => {
        console.log(data.data);
        setStatus(data.data.status);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // useEffect(() => {}, [statusOrder]);
  // useEffect(()=>{
  //   getOrder();
  //  },[data])
  // const getOrder = () => {
  //   try {
  //     const config = {
  //       headers: { Authorization: `Bearer ${cookies.get("data").user.token}` },
  //     };

  //     let orderDetails = "";
  //     axios
  //       .get(`https://mr-delivery-wista.herokuapp.com/order`, config)
  //       .then((data) => {
  //         data.data.map((element) => {
  //           element.all_items.forEach((e) => {
  //             orderDetails += e.meal_id + " ==> " + e.quantity + ",";
  //           });
  //           element.all_items = orderDetails;
  //           orderDetails = "";
  //         });
  //         console.log(data.data);
  //         setData(data.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  ///////
  async function getOrder() {
    try {
      let orderDetails = "";
      const response = await axios.get("https://mr-delivery-wista.herokuapp.com/owner", {
        headers: {
          Authorization: `Bearer ${cookies.get("data").user.token}`,
        },
      });
      response.data.map((element) => {
        element.all_items.forEach((e) => {
          orderDetails += e.quantity + " " + e.name + ",";
        });
        element.all_items = orderDetails.slice(0, -1);;
        orderDetails = "";
      });
      setData(response.data);
      setStatus()
    } catch (err) {
      console.log(err);
    }
  } /////////////////////////////
  useEffect(() => {
    getOrder();
  }, []);
  useEffect(() => {
    // console.log("eff");
    getOrder();
  }, [statusOrder]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "all_items", headerName: "Order Details", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      sortable: false

    },
    {
      field: "total_price",
      headerName: "Total Price",
      width: 160,
      sortable: false

    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}> */}
            <button
              id="change"
              onClick={() => handleChange(params.row.id)}
            >
              Change Statues
            </button>
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
      <Sidebar></Sidebar>
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={[...columns, { field: 'id', sortable: false }]}
          pageSize={10}
          checkboxSelection
        />
      </div>
    </div>
  );
}
