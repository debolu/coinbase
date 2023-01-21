import FooterPic from "./images/earth.jpg";
import Button from "./Components/Button";
import Logo from "./images/applogo.jpg";
// import ReactLanguageSelect from "react-languages-select";
import 'react-languages-select/css/react-languages-select.css';

const Company = [
  {
    id: 1,
    link: <a href="#">About</a>,
  },
  {
    id: 2,
    link: <a href="#">Career</a>
  },
  {
    id: 3,
    link: <a href="#">Affiliates</a>
  },
  {
    id: 4,
    link: <a href="#">Blog</a>
  },
  {
    id: 5,
    link: <a href="#">Press</a>
  },
  {
    id: 6,
    link: <a href="#">Security</a>
  },
  {
    id: 7,
    link: <a href="#">Investors</a>
  },
  {
    id: 8,
    link: <a href="#">Vendors</a>
  },
  {
    id: 9,
    link: <a href="#">Legal & privacy</a>
  },
  {
    id: 10,
    link: <a href="#">Cookie policy</a>
  },
  {
    id: 11,
    link: <a href="#">Cookie preferences</a>
  },
  {
    id: 12,
    link: <a href="#">Digital asset disclosure</a>
  },
]

const Learn= [
  
  {
    id: 1,
    link: <a href="#">Ethereum Merge</a>
  },
  {
    id: 2,
    link: <a href="#">Browse crypto prices</a>
  },
  {
    id: 3,
    link: <a href="#">Coinbase Bytes newsletter</a>
  },
  {
    id: 4,
    link: <a href="#">Crypto basics</a>
  },
  {
    id: 5,
    link: <a href="#">Tips & tutorials</a>
  },
  {
    id: 6,
    link: <a href="#">Market updates</a>
  },
  {
    id: 7,
    link: <a href="#">What is Bitcoin? </a>
  },
  {
    id: 8,
    link: <a href="#">What is crypto?</a>
  },
  {
    id: 9,
    link: <a href="#">What is a blockchain?</a>
  },
  {
    id: 10,
    link: <a href="#">How to set up a crypto wallet</a>
  },
  {
    id: 11,
    link: <a href="#">How to send crypto</a>
  },
  {
    id: 12,
    link: <a href="#">Taxes</a>
  },
]

const Individuals= [
  {
    id: 1,
    link: <a href="#">Buy & sell</a>
  },
  {
    id: 2,
    link: <a href="#">Earn free crypto</a>
  },
  {
    id: 3,
    link: <a href="#">Wallet</a>
  },
  {
    id: 4,
    link: <a href="#">NFT</a>
  },
  {
    id: 5,
    link: <a href="#">Card</a>
  },
  {
    id: 6,
    link: <a href="#">Derivatives</a>
  },
  {
    id: 7,
    link: <a href="#">Coinbase One</a>
  },
]

const Businesses= [
  
  {
    id: 1,
    link: <a href="#">Institutional</a>
  },
  {
    id: 2,
    link: <a href="#">Prime</a>
  },
  {
    id: 3,
    link: <a href="#">Asset Hub</a>
  },
  {
    id: 4,
    link: <a href="#">Commerce</a>
  },
]

const Developers= [
  {
    id: 1,
    link: <a href="#">Cloud</a>
  },
  {
    id: 2,
    link: <a href="#">Wallet SDK</a>
  },
  {
    id: 3,
    link: <a href="#">Coinbase Pay SDK</a>
  },
  {
    id: 4,
    link: <a href="#">Node</a>
  },
  {
    id: 5,
    link: <a href="#">Commerce</a>
  },
  {
    id: 6,
    link: <a href="#">Exchange & Pro</a>
  },
  {
    id: 7,
    link: <a href="#">Sign in with Coinbase</a>
  },
  {
    id: 8,
    link: <a href="#">Rosetta</a>
  },
  {
    id: 9,
    link: <a href="#">Participate</a>
  },
  {
    id: 10,
    link: <a href="#">Prime API</a>
  },
]

const Support= [
  {
    id: 1,
    link: <a href="#">Help center</a>
  },
  {
    id: 2,
    link: <a href="#">Contact us</a>
  },
  {
    id: 3,
    link: <a href="#">Create account</a>
  },
  {
    id: 4,
    link: <a href="#">ID verification</a>
  },
  {
    id: 5,
    link: <a href="#">Account information</a>
  },
  {
    id: 6,
    link: <a href="#">Payment methods</a>
  },
  {
    id: 7,
    link: <a href="#">Account access</a>
  },
  {
    id: 8,
    link: <a href="#">Supported crypto</a>
  },
  {
    id: 9,
    link: <a href="#">Supported countries</a>
  },
  {
    id: 10,
    link: <a href="#">Status</a>
  },
]


const Footer = () => {

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "450px",
          display: "flex",
          backgroundColor: "rgb(243 250 253)",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            zIndex: "1",
            justifySelf: "center",
            width: "40%",
            marginTop: "90px",
            marginLeft: "200px",
          }}
        >
          <div
            style={{
              width: "80%",
              fontWeight: "bold",
              fontSize: "30px",
              lineHeight: "50px",
            }}
          >
            Earn up to $10 worth of crypto
          </div>
          <p style={{ width: "80%", marginTop: "20px", fontSize: "15px" }}>
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
        <img
          alt=""
          src={FooterPic}
          style={{ float: "left", width: "70%", height: "90%" }}
        ></img>
      </div>
      <div style={{ color: "gray", marginLeft: "10%", marginRight: "10%" }}>
        *Upon purchase of USDC, you will be automatically opted in to rewards.
        If {"you’d"} like to opt out or learn more about rewards, you can click
        here. The rewards rate is subject to change and can vary by region.
        Customers will be able to see the latest applicable rates directly
        within their accounts.
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10%", paddingBottom:'0px', width:'100%'}}>
        <div style={{ position: "relative", display: "block", width:'30%' }}>
          <img
            alt=""
            src={Logo}
            style={{ width: "120px", marginBottom: "50px" }}
          ></img>
          {/* <div>
            <ReactLanguageSelect 
            names={"international"}
            defaultLanguage="en"
            searchable={true}
            languages={["en", "fr", "de", "it", "es"]}
            customLabels={{"en": "EN-US", "fr": "FR", "de": "DE", "it": "IT"}}
            pplaceholder="English"
            ref="userLanguage" />
          </div> */}
          <div style={{ color: "gray" }}>
            © 2023 Coinbase
            <ul
              style={{
                margin: "0px",
                padding: "0px",
                display: "flex",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              <li
                style={{
                  listStyleType: "none",
                  margin: "13px",
                  marginLeft: "0px",
                }}
              >
                Blog
              </li>
              <li style={{ margin: "15px" }}>Twitter</li>
              <li style={{ margin: "15px" }}>Facebook</li>
            </ul>
          </div>
        </div>
        <div style={{display:'flex', flexDirection:'column', flexWrap:'wrap', height:'800px', width:'content'}}>

<div style={{marginBottom:'40px', marginRight:'150px', }}>
  <h4>Company</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px'}}>{Company.map((list)=>(<li style={{marginTop:'3px'}}>{list.link}</li>))}</ul>
</div>
<div style={{marginBottom:'40px', marginRight:'150px'}}>
  <h4>Learn</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px'}}>{Learn.map((list)=>(<li style={{marginTop:'3px'}}>{list.link}</li>))}</ul>
</div><div style={{marginBottom:'40px', marginRight:'150px'}}>
  <h4>Individuals</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px'}}>{Individuals.map((list)=>(<li style={{marginTop:'3px'}}>{list.link}</li>))}</ul>
</div><div style={{marginBottom:'40px', marginRight:'150px'}}>
  <h4>Businesses</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px'}}>{Businesses.map((list)=>(<li style={{marginTop:'3px'}}>{list.link}</li>))}</ul>
</div><div style={{marginBottom:'40px', marginRight:'150px'}}>
  <h4>Developers</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px'}}>{Developers.map((list)=>(<li style={{marginTop:'3px'}}>{list.link}</li>))}</ul>
</div><div style={{marginBottom:'40px', marginRight:'150px'}}>
  <h4>Support</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px'}}>{Support.map((list)=>(<li style={{marginTop:'3px'}}>{list.link}</li>))}</ul>
</div>

</div>
      </div>
    </div>
  );
};

export default Footer;
