import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies=new Cookies();

export default function FeaturedInfo() {
  const[orderCount,setOrderCount]=useState(0);
  const[profitApp,setProfitApp]=useState(0);
  let url="";
  let orderUrl="";
  switch(cookies.get("data").user.role)
  {
    case "admin":{url="/profits-app";orderUrl="/order"}; break;
    case "owner":{url="/profits-owner";orderUrl="/owner-history"}; break;
    case "driver":{url="/profits-driver";orderUrl="/driver-history"}; break;
  }
  const getProfit =async()=>{
    console.log("role = ",cookies.get("data").user.role);
   const response = await axios.get(`http://localhost:5000${url}`, {
        headers: {
          Authorization: `Bearer ${cookies.get("data").user.token}`,
        },
      });
      console.log(response.data);
     
      setProfitApp(response.data.profits) 
  }

  const getOrder =async()=>{
    const response = await axios.get(`http://localhost:5000${orderUrl}`, {
      headers: {
        Authorization: `Bearer ${cookies.get("data").user.token}`,
      },
    });
    console.log(response.data);
    setOrderCount(response.data.length);
  }
  useEffect(()=>{
getProfit();
// if(cookies.get("data").user.role==="admin")
getOrder();
    // axios({
    //   method: 'get',
    //   url: 'http://localhost:5000/order',
    //   // responseType: 'stream'
    // })
    //   .then(function (response) {
    //    console.log(response.data.length);
    //    setOrderCount(response.data.length)
    //   });
      // const response = await axios.get(`http://localhost:5000${url}`, {
      //   headers: {
      //     Authorization: `Bearer ${cookies.get("data").user.token}`,
      //   },
      // });
      // console.log(response.data);
      // setOrderCount(response.data.length);
      // setProfitApp(response.data.profit)
      // axios({
      //   method: 'get',
      //   url: `http://localhost:5000${url}`,
      //   headers: {
      //     Authorization: `Bearer ${cookies.get("data").user.token}`,
      //   }
       
      // })
      //   .then(function (response) {
      //    console.log(response.data);
      //    setProfitApp(response.data)
      //   }).catch((e)=>{console.log(e);});
  },[])
  return (

    
    <div className="featured">
      {/* <Auth role="admin"> */}
      <div className="featuredItem">
        <span className="featuredTitle">Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{orderCount}</span>
          <span className="featuredMoneyRate">
            +10 <ArrowUpward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* </Auth> */}
      <div className="featuredItem">
        <span className="featuredTitle">Profit</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">JD {profitApp}</span>
          <span className="featuredMoneyRate">
            -100 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> */}
    </div>
  );
}
