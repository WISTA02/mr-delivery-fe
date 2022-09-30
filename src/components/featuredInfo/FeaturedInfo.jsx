import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export default function FeaturedInfo() {
  const[orderCount,setOrderCount]=useState(0);
  const[profitApp,setProfitApp]=useState(50)
  useEffect(()=>{

    axios({
      method: 'get',
      url: 'http://localhost:5000/order',
      // responseType: 'stream'
    })
      .then(function (response) {
       console.log(response.data.length);
       setOrderCount(response.data.length)
      });
      axios({
        method: 'get',
        url: 'http://localhost:5000/profits-app',
        // responseType: 'stream'
      })
        .then(function (response) {
         console.log(response.data);
         setProfitApp(response.data)
        });
  },[])
  return (
    <div className="featured">
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
      <div className="featuredItem">
        <span className="featuredTitle">Profit</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">JD{profitApp}</span>
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
