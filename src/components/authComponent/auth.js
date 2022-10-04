import React, { useContext } from "react";
// import { LoginContext } from "../../context/login";
import { When } from "react-if";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Auth(props) {
  // const login = useContext(LoginContext);
  return (
    <>
      <When condition={can(props.role)}>{props.children}</When>
    </>
  );
}
function can(roleAarr) {
  
  return (
    roleAarr?.includes(cookies.get("data")?.user.role) ||
    cookies?.get("data")?.user.role === "admin"
  );
}
