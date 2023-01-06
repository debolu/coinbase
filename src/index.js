import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Portfolio from "./porfolio";
import MobilePics from "./mobileimages";
import Table from "./table";
import Earncrypto from "./earncrypto";

const App = () => {
  return (
    <div>
      <Header />
      <Portfolio />
      <MobilePics />
      <Table />
      <Earncrypto />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
