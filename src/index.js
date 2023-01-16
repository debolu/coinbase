import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Portfolio from "./porfolio";
import Table from "./table";
import Earncrypto from "./earncrypto";
import Stats from "./stats";
import Footer from "./footer";

const App = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Header />
      <div style={{ margin: "10%", marginBottom:'0%', marginTop:'15%' }}>
        <Portfolio />
      </div>
      <Table />
      <div style={{ margin: "10%",marginTop:'50px' }}>
        <Earncrypto />
      </div>
      <Stats />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
