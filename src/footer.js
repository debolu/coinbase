import FooterPic from "./images/earth.jpg";
import Button from "./Components/Button";
import Logo from "./images/applogo.jpg";
// import ReactLanguageSelect from "react-languages-select";
// import 'react-languages-select/css/react-languages-select.css';

const Company = [
  {
    id: 1,
    link: <span href="#">About</span>,
  },
  {
    id: 2,
    link: <span href="#">Career</span>
  },
  {
    id: 3,
    link: <span href="#">Affiliates</span>
  },
  {
    id: 4,
    link: <span href="#">Blog</span>
  },
  {
    id: 5,
    link: <span href="#">Press</span>
  },
  {
    id: 6,
    link: <span href="#">Security</span>
  },
  {
    id: 7,
    link: <span href="#">Investors</span>
  },
  {
    id: 8,
    link: <span href="#">Vendors</span>
  },
  {
    id: 9,
    link: <span href="#">Legal & privacy</span>
  },
  {
    id: 10,
    link: <span href="#">Cookie policy</span>
  },
  {
    id: 11,
    link: <span href="#">Cookie preferences</span>
  },
  {
    id: 12,
    link: <span href="#">Digital asset disclosure</span>
  },
]

const Learn= [
  
  {
    id: 1,
    link: <span href="#">Ethereum Merge</span>
  },
  {
    id: 2,
    link: <span href="#">Browse crypto prices</span>
  },
  {
    id: 3,
    link: <span href="#">Coinbase Bytes newsletter</span>
  },
  {
    id: 4,
    link: <span href="#">Crypto basics</span>
  },
  {
    id: 5,
    link: <span href="#">Tips & tutorials</span>
  },
  {
    id: 6,
    link: <span href="#">Market updates</span>
  },
  {
    id: 7,
    link: <span href="#">What is Bitcoin? </span>
  },
  {
    id: 8,
    link: <span href="#">What is crypto?</span>
  },
  {
    id: 9,
    link: <span href="#">What is a blockchain?</span>
  },
  {
    id: 10,
    link: <span href="#">How to set up a crypto wallet</span>
  },
  {
    id: 11,
    link: <span href="#">How to send crypto</span>
  },
  {
    id: 12,
    link: <span href="#">Taxes</span>
  },
]

const Individuals= [
  {
    id: 1,
    link: <span href="#">Buy & sell</span>
  },
  {
    id: 2,
    link: <span href="#">Earn free crypto</span>
  },
  {
    id: 3,
    link: <span href="#">Wallet</span>
  },
  {
    id: 4,
    link: <span href="#">NFT</span>
  },
  {
    id: 5,
    link: <span href="#">Card</span>
  },
  {
    id: 6,
    link: <span href="#">Derivatives</span>
  },
  {
    id: 7,
    link: <span href="#">Coinbase One</span>
  },
]

const Businesses= [
  
  {
    id: 1,
    link: <span href="#">Institutional</span>
  },
  {
    id: 2,
    link: <span href="#">Prime</span>
  },
  {
    id: 3,
    link: <span href="#">Asset Hub</span>
  },
  {
    id: 4,
    link: <span href="#">Commerce</span>
  },
]

const Developers= [
  {
    id: 1,
    link: <span href="#">Cloud</span>
  },
  {
    id: 2,
    link: <span href="#">Wallet SDK</span>
  },
  {
    id: 3,
    link: <span href="#">Coinbase Pay SDK</span>
  },
  {
    id: 4,
    link: <span href="#">Node</span>
  },
  {
    id: 5,
    link: <span href="#">Commerce</span>
  },
  {
    id: 6,
    link: <span href="#">Exchange & Pro</span>
  },
  {
    id: 7,
    link: <span href="#">Sign in with Coinbase</span>
  },
  {
    id: 8,
    link: <span href="#">Rosetta</span>
  },
  {
    id: 9,
    link: <span href="#">Participate</span>
  },
  {
    id: 10,
    link: <span href="#">Prime API</span>
  },
]

const Support= [
  {
    id: 1,
    link: <span href="#">Help center</span>
  },
  {
    id: 2,
    link: <span href="#">Contact us</span>
  },
  {
    id: 3,
    link: <span href="#">Create account</span>
  },
  {
    id: 4,
    link: <span href="#">ID verification</span>
  },
  {
    id: 5,
    link: <span href="#">Account information</span>
  },
  {
    id: 6,
    link: <span href="#">Payment methods</span>
  },
  {
    id: 7,
    link: <span href="#">Account access</span>
  },
  {
    id: 8,
    link: <span href="#">Supported crypto</span>
  },
  {
    id: 9,
    link: <span href="#">Supported countries</span>
  },
  {
    id: 10,
    link: <span href="#">Status</span>
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
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px', color:'gray'}}>{Company.map((list)=>(<li style={{marginTop:'3px', cursor:'pointer'}}>{list.link}</li>))}</ul>
</div>
<div style={{marginBottom:'40px', marginRight:'150px'}}>
  <h4>Learn</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px', color:'gray'}}>{Learn.map((list)=>(<li style={{marginTop:'3px', cursor:'pointer'}}>{list.link}</li>))}</ul>
</div><div style={{marginBottom:'40px', marginRight:'150px'}}>
  <h4>Individuals</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px', color:'gray'}}>{Individuals.map((list)=>(<li style={{marginTop:'3px', cursor:'pointer'}}>{list.link}</li>))}</ul>
</div><div style={{marginBottom:'40px', marginRight:'150px'}}>
  <h4>Businesses</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px', color:'gray'}}>{Businesses.map((list)=>(<li style={{marginTop:'3px', cursor:'pointer'}}>{list.link}</li>))}</ul>
</div><div style={{marginBottom:'40px', marginRight:'150px'}}>
  <h4>Developers</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px', color:'gray'}}>{Developers.map((list)=>(<li style={{marginTop:'3px', cursor:'pointer'}}>{list.link}</li>))}</ul>
</div><div style={{marginBottom:'40px', marginRight:'150px'}}>
  <h4>Support</h4>
  <ul style={{listStyleType:'none', padding:'0px', margin:'0px', color:'gray'}}>{Support.map((list)=>(<li style={{marginTop:'3px', cursor:'pointer'}}>{list.link}</li>))}</ul>
</div>

</div>
      </div>
    </div>
  );
};

export default Footer;
