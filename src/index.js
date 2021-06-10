import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const authDomain = "dev-3m1i3vdf.us.auth0.com";
const authClientId = "vLYccxQ1OTN1k4uzE2uXyPaETrZZPO6j";

ReactDOM.render(
  <Auth0Provider
    domain={authDomain}
    clientId={authClientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
