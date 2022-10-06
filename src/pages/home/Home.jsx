import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";
import Sidebar from "../../components/sidebar/Sidebar";
// import SearchBar from "../../components/Searchbar";
// import Sidebar from "../../components/sidebar/Si";

export default function Home() {
  return (
    <div className="home2">
      <Sidebar></Sidebar>
      <div className="home">

      <FeaturedInfo />
      <Chart data={userData} title="Order Analytics" grid dataKey="Orders"/>
      <div className="homeWidgets">
        {/* <WidgetSm/> */}
        {/* <WidgetLg/> */}
      </div>
      </div>
    </div>
  );
}
