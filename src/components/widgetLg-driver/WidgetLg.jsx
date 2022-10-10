
import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./widgetLg.css";
import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies();




export default function WidgetLg() {
  const [filter, setFilter] = useState([]);
  const [approve, setApprove] = useState(false)

  async function getUsers() {
    try {
      const response = await axios.get('http://localhost:5000/approve', {
        headers: {
          Authorization: `Bearer ${cookies.get('data').user.token}`
        }
      });
      const updatedList = response.data.filter((x) => x.role === 'driver');
      setFilter(updatedList);
    } catch (err) {
      console.log(err);
    }
  }

  const handleAprroved = async (data) => {
    setApprove(true)
    let url = `http://localhost:5000/approve/${data.id}`;
    try {
      const response = await (url, { approved: true }, {
        headers: {
          Authorization: `Bearer ${cookies.get('data').user.token}`
        }
      });
      setApprove(false)
      return (response.data)
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeclined = async (data) => {
    setApprove(true)
    let url = `http://localhost:5000/approve/${data.id}`;
    try {
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${cookies.get('data').user.token}`
        }
      });
      setApprove(false)
      return (response.data)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [approve]);


  const ShowProducts = () => {
    return (
      <>
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Driver Information</h3>
          <table className="widgetLgTable">
            <thead>
              <tr className="widgetLgTr">
                <th className="widgetLgTh">Name</th>
                <th className="widgetLgTh">email</th>
                <th className="widgetLgTh">Phone</th>
                <th className="widgetLgTh">Location</th>
                <th className="widgetLgTh">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                filter.map((data) => {
                  return (
                    <tr className="widgetLgTr" key={data.id}>
                      <td className="widgetLgDate">
                        <span className="widgetLgName">{data.username}</span>
                      </td>
                      <td className="widgetLgDate">{data.email} </td>
                      <td className="widgetLgDate">{data.phone} </td>
                      <td className="widgetLgDate">{data.location.city} </td>
                      <td className="widgetLgStatus">
                        <button className="widgetLgButton Approved" onClick={() => handleAprroved(data)}>Approved</button>
                        <button className="widgetLgButton Declined" onClick={() => handleDeclined(data)} >Declined</button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </>
    )
  }

  return (
    <div className="sb">
      <Sidebar />
      <div className="widgetLg">
        {<ShowProducts />}
      </div>
    </div>
  );
}
