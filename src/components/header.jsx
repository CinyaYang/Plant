import React, { Component } from "react";
import NavBar from "./navBar.jsx";
class Header extends Component {
  render() {
    return (
      <div>
        {/* <div className="logoContainer" /> */}
        <NavBar />
      </div>
    );
  }
}

export default Header;
