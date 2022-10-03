import React, { useContext } from "react";
import { LoginContext } from "../../context/login";
import { When } from "react-if";

export default function Auth(props) {
  const login = useContext(LoginContext);
  return (
    <>
      <When condition={login.loggedIn && login.can(props.action)}>
        {props.children}
      </When>
    </>
  );
}
