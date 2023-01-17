import FooterPic from "./images/earth.jpg";
import Button from "./Components/Button";

const Footer = () => {
  return (
    <div>
      <div style={{width: "100%", height:'450px', display:'flex', backgroundColor:'rgb(243 250 253)', marginTop:'100px' }}>
      <div style={{zIndex:'1',  width: "40%", marginTop:'90px', marginLeft:'150px' }}>
          <div style={{width:'80%', fontWeight:'bold', fontSize:'30px', lineHeight:'50px' }}>Earn up to $10 worth of crypto</div>
          <p style={{ width: "80%", marginTop:'20px', fontSize:'15px' }}>
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </p>
          <Button
            name="start earning"
            color="rgb(10, 70, 228)"
            width="120px"
            height="40px"
            style={{ marginLeft: "40px" }}
          >
          </Button>
        </div>
        <img alt="" src={FooterPic} style={{float:'left', width:'70%', height:'90%'}}></img>
      </div>
    </div>
  );
};

export default Footer;
