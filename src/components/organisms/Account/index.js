import React from "react";
import Link from "../../atoms/Link";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
  };

  console.log(user);
  //   116108022397484757136
  return isAuthenticated ? (
    <Link
      text={user.given_name}
      variant="navLink"
      endIcon={<KeyboardArrowDownRoundedIcon />}
      clickHandler={handleLogout}
    />
  ) : (
    <Link
      text="Login"
      variant="navLink"
      endIcon={<KeyboardArrowDownRoundedIcon />}
      clickHandler={handleLogin}
    />
  );
};

export default Account;
