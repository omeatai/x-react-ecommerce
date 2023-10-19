import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/cartContext";
import { signOutUser } from "../../utils/firebase/firebase";

import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropDown from "../../components/CartDropDown/CartDropDown";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./NavigationStyle";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const getEmailUsername = (email) => {
    const re = /(.*)@.+/;
    return email.replace(re, "$1").toUpperCase();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/home">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" to="#" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          {currentUser ? (
            <NavLink to="#">
              <strong>Welcome, {getEmailUsername(currentUser.email)}!</strong>
            </NavLink>
          ) : null}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
