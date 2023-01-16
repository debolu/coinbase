import FooterPic from "./images/earth.jpg";
import Button from "./Components/Button";

const Footer = () => {
  return (
    <div>
      <div style={{ width: "100%", display:'flex', backgroundColor:'' }}>
        <div style={{ width: "45%" }}>
          <h1 style={{ width: "90%" }}>Earn up to $10 worth of crypto</h1>
          <p style={{ width: "80%" }}>
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </p>
          <Button
            name="start earning"
            color="rgb(10, 70, 228)"
            width="120px"
            height="40px"
            style={{ marginLeft: "40px" }}
          ></Button>
        </div>
        <img alt="" src={FooterPic}></img>
      </div>
    </div>
  );
};

export default Footer;
