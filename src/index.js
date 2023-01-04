import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Portfolio from "./hero";
import MobilePics from "./mobileimages";
import Table from "./table";

const App = () => {
  return (
    <div>
      <Header />
      <Portfolio />
      <MobilePics />
      <Table />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
