import Button from "./Components/Button";
import GRT from "./images/GRT.png";
import AMP from "./images/amp.png";
import NEAR from "./images/near.png";
import Trend from "./images/ftxGraph.jpg";
import Manage from "./images/manage.jpg";
import Recurring from "./images/recurring.jpg";
import Vault from "./images/vault.jpg";
import Mobileapps from "./images/mobileapps.jpg";
import Secure from "./images/secure.jpg";
import Insurance from "./images/insurance.jpg";
import Industry from "./images/industry.jpg";

const Earncrypto = () => {
  const grt = (
    <img src={GRT} alt="The graph live chart" style={{ width: "35px" }}></img>
  );
  const amp = (
    <img src={AMP} alt="AMP live chart" style={{ width: "35px" }}></img>
  );
  const near = (
    <img src={NEAR} alt="NEAR live chart" style={{ width: "35px" }}></img>
  );

  const viewrates = [
    {
      id: 1,
      logo: grt,
      name: "The Graph",
      acronym: "GRT",
      earn: "Earn $4 GRT",
    },
    {
      id: 2,
      logo: amp,
      name: "Amp",
      acronym: "AMP",
      earn: "Earn $3 AMP",
    },
    {
      id: 3,
      logo: near,
      name: "Near Protocol",
      acronym: "NEAR",
      earn: "Earn $3 NEAR",
    },
  ];

  const coinbasePros = [
    {
        id: 1,
        image: Manage,
        header: "Manage your porfolio",
        subheader: "Buy and sell popular digital currencies, keep track of them in the one place."
    },
    {
        id: 1,
        image: Recurring,
        header: "Recurring buys",
        subheader: "Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly."
    },
    {
        id: 1,
        image: Vault,
        header: "Vault protection",
        subheader: "For added security, store your funds in a vault with time delayed withdrawals."
    },
    {
        id: 1,
        image: Mobileapps,
        header: "Mobile apps",
        subheader: "Stay on top of the markets with the Coinbase app for Android or iOS."
    },
  ];

  const coinbasepros2 = [
    {
        id: 1,
        image: Secure,
        header: "Secure storage",
        subheader: "We store the vast majority of the digital assets in secure offline storage.",
        link: "Learn how Coinbase keeps your funds safe and secure >"
    },
    {
        id: 2,
        image: Insurance,
        header: "Protected by insurance",
        subheader: "Coinbase maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
        link: "Learn how your crypto is covered by our insurance policy >"
    },
    {
        id: 3,
        image: Industry,
        header: "Industry best practices",
        subheader: "Coinbase supports a variety of the most popular digital currencies.",
        link: "Learn how we implement industry best practices for account security >"
    }
  ]

  return (
    <div>
      <div style={{display: "flex"}}>
        {/* Find out how to reuse this component in another component file */}
        <div style={{ width: "40%" }}>
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
        {/* Reuse component to this point */}

        <div style={{ width: "45%", marginLeft: "10%" }}>
          {viewrates.map((rates) => (
            <div
              style={{ display: "flex", height: "70px", alignItems: "center" }}
            >
              <span style={{ width: "60px" }}>{rates.logo}</span>{" "}
              <span style={{ width: "25%" }}>{rates.name}</span>
              <span style={{ width: "25%" }}>{rates.acronym}</span>{" "}
              <span
                style={{
                  width: "40%",
                  justifyContent: "center",
                  color: "rgb( 9,133,81 )",
                  fontWeight: "bold",
                }}
              >
                {rates.earn}
              </span>
            </div>
          ))}
          <span
            style={{
              color: "rgb( 0,82,255)",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            {" "}
            View more {'>'}
          </span>
        </div>
      </div>
      <div style={{position:'relative', top:'70px'}}>
        <div style={{display:'grid', width:'100%', padding:'20px', marginBottom:'70px'}}>
          <h2 style={{fontSize:'35px', justifySelf:'center'}}>Create your cryptocurrency portfolio today</h2>
          <p style={{color:'gray', justifySelf:'center'}}>
            Coinbase has a variety of features that make it the best place to
            start trading
          </p>
        </div>
        <div style={{display:'inline-flex', flexDirection:'row-reverse'}}>
          <div style={{margin:'20px', width:'60%'}}><img src={Trend} alt="A trend chart of coinbase app" style={{width:'110%', height:'450px'}}></img></div>
          <div style={{width:'40%'}}>
                {coinbasePros.map((pros)=>(
                    <div style={{display:'inline-flex', marginTop:'10px', alignItems:'center'}}>
                        <img alt="" src={pros.image} style={{width:'60px', margin:'20px'}}></img>
                        <div style={{marginLeft:'10px'}}>
                            <h3>{pros.header}</h3>
                            <p style={{color:'gray', fontSize:'15px'}}>{pros.subheader}</p>
                        </div>
                    </div>
                ))}
          </div>
        </div>
      </div>
      <div style={{position:'relative', height:'200px', top:'100px', marginLeft:'-150px', width:'130%'}}><hr style={{height:'1px', backgroundColor:'rgb(225, 225, 225)', border:'none'}}></hr></div>
      <div>
        <div style={{display:'grid', width:'100%', padding:'20px', marginBottom:'70px'}}>
        <h2 style={{fontSize:'35px', justifySelf:'center'}}>The most trusted cryptocurrency platform</h2>
          <p style={{color:'gray', justifySelf:'center'}}>
          Here are a few reasons why you should choose Coinbase
          </p>
        </div>
        <div style={{width:'100%', display:'inline-flex', justifyItems:'center'}}>
                {coinbasepros2.map((pros)=>(
                    <div style={{display:'flex', flexDirection:'column', width:'100%', justifyItems:'center', marginTop:'10px', alignItems:'center'}}>
                        <img alt="" src={pros.image} style={{width:'85px', height:'85px', justifySelf:'center'}}></img>
                        <div style={{display:'flex', flexDirection:'column', padding:'20px', textAlign:'center', width:'100%'}}>
                            <h3 style={{ padding:'10px'}}>{pros.header}</h3>
                            <p style={{position:'relative',backgroundColor:'red', color:'gray', fontSize:'15px', minHeight:'fit-content'}}>{pros.subheader}</p>
                            <a href={pros.link} style={{position:'relative', justifySelf:'center', color:'blue', cursor:'pointer'}}>{pros.link}</a>
                        </div>
                    </div>
                ))}
          </div>      
      </div>
    </div>
  );
};

export default Earncrypto;
