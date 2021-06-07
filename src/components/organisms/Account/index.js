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

  return isAuthenticated ? (
    <Link
      text={`${user.name}(Logout)`}
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
