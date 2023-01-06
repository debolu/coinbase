import Button from "./Components/Button";
import GRT from "./images/GRT.png";
import AMP from "./images/amp.png";
import NEAR from "./images/near.png";

const Earncrypto = () => {

    const grt = <img src={GRT} alt="The graph live chart"></img>
    const amp = <img src={AMP} alt="AMP live chart"></img>
    const near = <img src={NEAR} alt="NEAR live chart"></img>

    const viewrates = [
        {
            id: 1,
            logo: grt,
            name:"The Graph",
            acronym: "GRT",
            earn: "Earn $4 GRT"
        },
        {
            id: 2,
            logo: amp,
            name:"Amp",
            acronym: "AMP",
            earn: "Earn $3 AMP"
        },
        {
            id:3,
            logo: near,
            name:"Near Protocol",
            acronym: "NEAR",
            earn: "Earn $3 NEAR"
        }
    ]

    return (
        <div>
            <div><h1>Earn up to $10 worth of crypto</h1>
            <p>Discover how specific cryptocurrencies work —
                 and get a bit of each crypto to try out for yourself.</p>
            <Button name="start earning" color="blue">Start Earning</Button></div>

            <div>{viewrates.map((rates)=>(
                <div>{rates.logo} {rates.name} {rates.acronym} {rates.earn}</div>
            ))}</div>          
        </div>
    )
}

export default Earncrypto;