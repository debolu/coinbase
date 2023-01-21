import Create from "./images/create.jpg";
import Link from "./images/linkbank.jpg";
import Startbuying from "./images/startbuying.jpg";

const statsPrice = [
  {
    id: 1,
    price: '$159B',
    caption: "Quarterly Volume traded",
  },
  {
    id: 2,
    price: "100+",
    caption: "Countries supported",
  },
  {
    id: 3,
    price: "108M+",
    caption: "Verified users",
  },
];

const Stats = () => {
  return (
    <div>
      <div style={{ width: "100%", backgroundColor: "rgb(10, 70, 228)", color:'white', position:'relative', display:'flex'}}>
        {statsPrice.map((stats) => (
          <div style={{display:'flex', width:'100%', flexDirection:'column', padding:'10px', margin:'50px', textAlign:'center'}}>
            <span style={{fontSize:'60px', fontWeight:'bold', marginBottom:'35px'}}>{stats.price}</span>
            <span style={{fontSize:'17px', color:'rgb(183 184 234)'}}>{stats.caption}</span>
          </div>
        ))}
      </div>
      <div style={{position:'relative', top:'70px', width: '90%', textAlign:'center', marginLeft:'auto', marginRight:'auto'}}>
        <div style={{display:'grid', width:'100%', padding:'20px'}}>
          <h2 style={{fontSize:'35px', justifySelf:'center'}}>Get started in a few minutes</h2>
          <p style={{color:'gray', justifySelf:'center'}}>
          Coinbase supports a variety of the most popular digital currencies.
          </p>
        </div>

        {/* There is further need to DRY up this section */}
        <div style={{display:'flex', width:'100%', alignItems:'center', padding:'100px', paddingTop:'0px'}}>
            <figure style={{width:'400px', margin:'0px' }}>
                <img alt="" src={Create} style={{width:'100px', marginBottom:'10px'}}></img>
                <figcaption style={{fontWeight:'bold', fontSize:'20px'}}>Create an account</figcaption>
            </figure>
            <hr style={{width:'150px'}}></hr>
            <figure style={{width:'400px', margin:'0px' }}>
                <img alt="" src={Link} style={{width:'100px', marginBottom:'10px'}}></img>
                <figcaption style={{fontWeight:'bold', fontSize:'20px'}}>Link your bank account</figcaption>
            </figure>
            <hr style={{width:'150px'}}></hr>
            <figure style={{width:'400px', margin:'0px' }}>
                <img alt="" src={Startbuying} style={{width:'100px', marginBottom:'10px'}}></img>
                <figcaption style={{fontWeight:'bold', fontSize:'20px'}}>Start buying &selling</figcaption>
            </figure>
        </div>
        {/* Up to this point */}
        </div>
    </div>
  );
};

export default Stats;
