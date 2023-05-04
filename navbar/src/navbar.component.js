import React from "react";
import { navigateToUrl } from "single-spa";

function Navbar() {
  return <div>
    <a href="/" onClick={navigateToUrl}>
      Home
    </a>
    <a href="/configure" onClick={navigateToUrl}>
      Configure
    </a>
  </div>
}

export default Navbar;