import DataTable from "react-data-table-component";
import Button from "./Components/Button";
import Btc from "./images/btc.png";
import Eth from "./images/eth.png";
import Cardano from "./images/cardano.png";
import Solana from "./images/solana.png";
import './table.css'

const data = [
  {
    id: 1,
    logo: <img style={{width:'35px'}} src={Btc} alt="Bitcoin" width='20%'></img>,
    name: "Bitcoin",
    acronym: "BTC",
    price: "NGN 7,984,839.03",
    change: -1.54
  },
  {
    id: 2,
    logo: <img style={{width:'35px'}} src={Eth} alt="Etherium" width='20%'></img>,
    name: "Etherium",
    acronym: "ETH",
    price: "NGN 984,839.03",
    change: -2.24
  },
  {
    id: 3,
    logo: <img style={{width:'35px'}} src={Cardano} alt="Cardano" width='20%'></img>,
    name: "Cardano",
    acronym: "ADA",
    price: "NGN 106.03",
    change: -2.57
  },
  {
    id: 4,
    logo: <img style={{width:'35px'}} src={Solana} alt="Solana" width='20%'></img>,
    name: "Solana",
    acronym: "SOL",
    price: "NGN 4,839.03",
    change: +1.54
  }
];

const payButton = <Button name="Buy" width="50px" height="30px"  color="green" radius="5px"></Button>;

const columns = [
  {
      name: "#",
      selector: (row) => row.id,
      width: '100px',
      center: true
  },
  {
      name: "Name",
      selector: (row)=> <div  style={{display:'flex', alignItems:'center', fontWeight:'bold'}}>{row.logo} <span style={{marginLeft:'30px', fontSize:'15px', width:'50px'}}>{row.name}</span> <p style={{marginLeft:'50px', color:'gray', fontSize:'18px'}}>{row.acronym}</p>
      </div>,
      width: '500px'
  },
  {
      name: "Price",
      selector: (row) => <span style={{fontSize:'15px', fontWeight:"bolder"}}>{row.price}</span>,
      width: '200px'
  },
  {
      name: "Change",
      selector: (row) => <div className={row.change < 0 ? "red" : "green"}>{row.change} %</div>,
      width: '100px'
  },
  {
      name: "Chart",
      selector: (row) => [],
      width: "70px"
  },
  {
      name: "Trade",
      selector: (row) => payButton,
      width: "100px"      
  }
];

const conditionalRowStyles = [
  {
    when: (row) => row.change !== 1,
    style: row => ({ color: row.isSpecial ? 'green' : 'red' }),
  }
];

const customStyles = {
  rows: {
      style: {
          maxHeight: '50px', // override the row height
          width: "100%"
      },
  },

  columns: {
    style: {
      Width: "100%",
      margin:'50px'
    }
  },
  
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
      },
  },
  cells: {
      style: {
          paddingLeft: '10px', // override the cell padding for data cells
          paddingRight: '10px',
      },
  },
};

const Table = () => {

  return (
        <div>
            <DataTable 
            className={"tableBody"}
            columns={columns}
            data={data}
            customStyles={customStyles}
            // conditionalRowStyles={conditionalRowStyles}
            highlightOnHover= {true}
            />
        </div>
        );
};

export default Table;
