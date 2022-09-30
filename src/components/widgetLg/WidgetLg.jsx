import Sidebar from "../sidebar/Sidebar";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="sb">

  <Sidebar/>
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Date</th>
          {/* <th className="widgetLgTh">Amount</th> */}
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JRcNcgpIMEo8GbIOpcSaWm1iYy25WS_kCQ&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Biggest Pizza</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JRcNcgpIMEo8GbIOpcSaWm1iYy25WS_kCQ&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Biggest Pizza</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgStatus">
          <Button type="Approved" />
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JRcNcgpIMEo8GbIOpcSaWm1iYy25WS_kCQ&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Biggest Pizza</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgStatus">
          <Button type="Approved" />
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JRcNcgpIMEo8GbIOpcSaWm1iYy25WS_kCQ&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Biggest Pizza</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgStatus">
          <Button type="Approved" />
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
    </div>
  );
}