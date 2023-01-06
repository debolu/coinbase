import DataTable from "react-data-table-component";
import Button from "./Components/Button";
import Btc from "./images/btc.png";
import Eth from "./images/eth.png";
import Cardano from "./images/cardano.png";
import Solana from "./images/solana.png";

const data = [
  {
    id: 1,
    logo: <img src={Btc} alt="Bitcoin" width='20%'></img>,
    name: "Bitcoin",
    acronym: "Btc",
    price: "NGN 7,984,839.03",
    change: "-1.54%"
  },
  {
    id: 2,
    logo: <img src={Eth} alt="Etherium" width='20%'></img>,
    name: "Etherium",
    acronym: "Eth",
    price: "NGN 984,839.03",
    change: "-2.24%"
  },
  {
    id: 3,
    logo: <img src={Cardano} alt="Cardano" width='20%'></img>,
    name: "Cardano",
    acronym: "ADA",
    price: "NGN 106.03",
    change: "-2.57%"
  },
  {
    id: 4,
    logo: <img src={Solana} alt="Solana" width='20%'></img>,
    name: "Solana",
    acronym: "SOL",
    price: "NGN 4,839.03",
    change: "+1.54%"
  }
];

const payButton = <Button name="Buy" width="50px" height="30px"  color="green" radius="5px"></Button>;

const columns = [
  {
      name: "#",
      selector: (row) => row.id,
      width: '150px',
      center: true
  },
  {
      name: "Name",
      selector: (row)=> `${row.logo} ${row.name} ${row.acronym}`,
      width: '450px'
  },
  {
      name: "Price",
      selector: (row) => row.price,
      width: '300px'
  },
  {
      name: "Change",
      selector: (row) => row.change,
      width: '100px'
  },
  {
      name: "Chart",
      selector: (row) => [],
      width: "50px"
  },
  {
      name: "Trade",
      selector: (row) => payButton,
      width: "100px"      
  }
];

const customStyles = {
  rows: {
      style: {
          maxHeight: '50px', // override the row height
          Width: '150px'
      },
  },

  columns: {
    style: {
      Width: "10px"
    }
  },

  // when: columns => columns.name === "chart",
  // s: "10px"
  //   }},tyles: {
  //   width
  
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
            columns={columns}
            data={data}
            customStyles={customStyles}
            width="100px"
            highlightOnHover= {true}
            />
        </div>
        );
};

export default Table;
