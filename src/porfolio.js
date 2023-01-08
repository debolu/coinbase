import React from "react";
import Button from "./Components/Button";
import { Icon } from "@iconify/react";
import Mobilepics from "./images/mobilepics.jpg"

const Portfolio = () => {
  return (
    <div style={{display:'flex', position:'relative', top: '-40px', width:'100%'}}>
      <div style={{width:'50%'}}>
        <span
          style={{
            color: "rgb(10, 70, 228)",
            fontWeight: "bold",
            fontSize: "15px",
            justifyItems: "center",
          }}
        >
          <Icon
            width={"30px"}
            style={{ marginRight: "20px", marginLeft:'10px', position:'relative', top:'8px' }}
            icon="icon-park:bitcoin"
          />
          Jump start your portfolio →
        </span>
        ,
        <div>
          <h1 style={{marginTop:'15px', fontSize:'60px', lineHeight:'60px', width:'80%'}}>Jump start your crypto portfolio</h1>
          <p style={{fontWeight:'normal', fontSize:'20px', marginTop:'20px'}}>
            Coinbase is the easiest place to buy and sell cryptocurrency. Sign
            up and get started today.
          </p>
        </div>
        
        <div style={{display:'flex', position:'relative', top:'20px', alignItems:'center'}}>
          <input type={"email"} placeholder={"Email address"} style={{width:'100%', height:'70px', padding:'20px', outline: 'none', marginRight:'10px'}}></input>
          <Button
            name="Get Started"
            color="rgb(10, 70, 228)"
            width="170px"
            height="70px"
            radius="10px"
            type="submit"
            href="#"
          ></Button>
        </div>
      </div>
      <div style={{width:'50%', marginLeft:'40px'}}>
        <img src={Mobilepics} alt="Trend charts" style={{width:'110%', height:'100%'}}></img>
      </div>
    </div>
  );
};

export default Portfolio;
