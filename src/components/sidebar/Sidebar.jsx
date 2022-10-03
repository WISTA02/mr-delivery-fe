import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  DriveEta,
  RestaurantMenu,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";
import Auth from "../authComponent/auth";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList">
            <Auth role="admin">
              <Link to="/admin" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
            </Auth>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Auth role="owner">
              <Link to="/Ordersapprove" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Orders
                </li>
              </Link>
            </Auth>
            <Auth role="driver">
              <Link to="/driver-order" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Driver Order
                </li>
              </Link>
            </Auth>
            <Auth role="user">
              <Link to="/orderhistory" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Order History
                </li>
              </Link>
            </Auth>
          </ul>
        </div>

        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manager
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Resturant
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Driver
            </li>
          </ul>
        </div> */}
        <Auth role={"admin"}>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Approved</h3>
            <ul className="sidebarList">
              <Link to="/admin/resturant" className="link">
                <li className="sidebarListItem">
                  <RestaurantMenu className="sidebarIcon" />
                  Resturant
                </li>
              </Link>
              <Link to="/admin/driver" className="link">
                <li className="sidebarListItem">
                  <MdDeliveryDining className="sidebarIcon" />
                  Driver
                </li>
              </Link>
              {/* import DriveEtaIcon from '@mui/icons-material/DriveEta'; */}
            </ul>
          </div>
        </Auth>
      </div>
    </div>
  );
}
