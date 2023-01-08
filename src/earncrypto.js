import Button from "./Components/Button";
import GRT from "./images/GRT.png";
import AMP from "./images/amp.png";
import NEAR from "./images/near.png";
import Trend from "./images/ftxGraph.jpg";
import Manage from "./images/manage.jpg";
import Recurring from "./images/recurring.jpg";
import Vault from "./images/vault.jpg";
import Mobileapps from "./images/mobileapps.jpg";

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
  ]

  return (
    <div>
      <div style={{ display: "flex" }}>
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
          >
            Start Earning
          </Button>
        </div>

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
          <a
            href="#"
            style={{
              color: "rgb( 0,82,255)",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            {" "}
            View more >
          </a>
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
          <div style={{margin:'20px'}}>{Trend}</div>
          <div style={{width:'40%'}}>
                {coinbasePros.map((pros)=>(
                    <div style={{display:'inline-flex', marginTop:'10px', alignItems:'center'}}>
                        <img src={pros.image} style={{width:'60px', margin:'20px'}}></img>
                        <div style={{marginLeft:'10px'}}>
                            <h3>{pros.header}</h3>
                            <p style={{color:'gray', fontSize:'15px'}}>{pros.subheader}</p>
                        </div>
                    </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earncrypto;
