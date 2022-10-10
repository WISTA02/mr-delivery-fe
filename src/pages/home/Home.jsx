import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { data } from "autoprefixer";
import { useState } from "react";
import Auth from "../../components/authComponent/auth";
const cookies = new Cookies();

export default function Home() {
const[userData,setUserData]=useState();

  function findOcc(arr, key){
    let arr2 = [];
      
    arr.forEach((x)=>{
         
       if(arr2.some((val)=>{ return val[key] == x[key] })){
         arr2.forEach((k)=>{
           if(k[key] === x[key]){ 
             k["Orders"]++
           }
        })
           
       }else{
         let a = {}
         a[key] = x[key]
         a["Orders"] = 1
         arr2.push(a);
       }
    })
      console.log({arr2});
      setUserData(arr2);
      console.log(userData);
    return arr2
  }

const getOrder=async()=>{
  let url = `http://localhost:5000/order`
  const response = await axios.get(url, {
      headers: {
          Authorization: `Bearer ${cookies.get('data').user.token}`
      }
  });
  console.log(response.data);
  findOcc(response.data,"restaurant_name")

}


  useEffect(()=>{
    getOrder();
  },[])
  return (
    <div className="home2">
      <Sidebar></Sidebar>
      <div className="home">

      <FeaturedInfo />
      <Auth role="admin">
      <Chart data={userData} title="Order Analytics" grid dataKey="Orders"/>
      </Auth>
      <div className="homeWidgets">
        {/* <WidgetSm/> */}
        {/* <WidgetLg/> */}
      </div>
      </div>
    </div>
  );
}
