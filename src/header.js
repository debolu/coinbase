import React from "react";
import Logo from "./images/applogo.jpg";
import Button from "./Components/Button";

const Nav = [
  { id: 1, name: "Explore", link: "#" },
  { id: 2, name: "Learn", link: "#" },
  { id: 3, name: "Individual", link: "#" },
  { id: 4, name: "Businesses", link: "#" },
  { id: 5, name: "Developers", link: "#" },
  { id: 6, name: "Company", link: "#" },
];

const header = () => {
  return (
    <div>
      <header style={{position:'fixed', top:'0px', zIndex:'1', backgroundColor:'white', display: "inline-flex", paddingTop: "10px", boxShadow:'1px 1px 5px 3px rgb(245, 245, 245)', width:'100%'}}>
        <div id="logo-Wrapper" style={{ width: "150px", marginRight: "10px" }}>
          <img
            src={Logo}
            alt="The coinbase logo"
            style={{ width: "90%", padding: "10px", marginLeft: "60px" }}
          ></img>
        </div>
        <nav className="mainNav">
          <ul
            style={{
              display: "inline-flex",
              listStyleType: "none",
              width: "850px",
              justifyContent: "center",
              marginRight: "70px",
            }}
          >
            {Nav.map((data) => (
              <li style={{ marginLeft: "35px", fontSize:'0.85em', fontWeight: "bold" }}>
                <a href={data.link} style={{ color: "black" }}>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          id="signIn"
          style={{
            display: "inline-flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <Button
            type="submit"
            name="Get started"
            href="#"
            color="rgb(10, 70, 228)"
            width='120%'
          ></Button>
          
          <span style={{ marginRight: "20px", fontSize: "15px" }}>
            <span>Sign In</span>
          </span>

        </div>
      </header>
    </div>
  );
};

export default header;
