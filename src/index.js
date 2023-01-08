import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Portfolio from "./porfolio";
import Table from "./table";
import Earncrypto from "./earncrypto";

const App = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Header />
      <div style={{ margin: "10%", marginBottom:'0%' }}>
        <Portfolio />
      </div>
      <Table />
      <div style={{ margin: "10%" }}>
        <Earncrypto />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
