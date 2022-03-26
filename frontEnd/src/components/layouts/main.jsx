import React, { Component } from "react";

import HomePage from "../pages/home/HomePage";

import Header from "../common/header";
import Footers from "../common/footers";

//default layout
class MainLayout extends Component {

  //Inherited Parent options.
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <>
        <Header />
              <HomePage/>
          <Footers/>
        </>
    );
  }
}

export default MainLayout;
