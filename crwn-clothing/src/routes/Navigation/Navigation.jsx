import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";

import { signOutUser } from "../../utils/firebase/firebase";

import "./Navigation.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const getEmailUsername = (email) => {
    const re = /(.*)@.+/;
    return email.replace(re, "$1").toUpperCase();
  };

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/home">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="#" onClick={signOutHandler}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          {currentUser ? (
            <Link className="nav-link" to="#">
              <strong>Welcome, {getEmailUsername(currentUser.email)}!</strong>
            </Link>
          ) : null}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
