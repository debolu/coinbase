import DataTable from "react-data-table-component";
import { useState } from "react";
import Button from "./Components/Button";
import Btc from "./images/btc.png";
import Eth from "./images/eth.png";
import Cardano from "./images/cardano.png";
import Solana from "./images/solana.png";



const Table = () => {

const payButton = <Button name="Buy" color="Blue"></Button>;
const [loading, setLoading] = useState(false);
const data = [
    {
      id: 1,
      logo: <img src={Btc}></img>,
      Name: "Bitcoin Btc",
      price: "NGN 7,984,839.03",
      change: "-1.54%"
    },
    {
      id: 2,
      logo: <img src={Eth}></img>,
      Name: "Etherium Eth",
      price: "NGN 984,839.03",
      change: "-2.24%"
    },
    {
      id: 3,
      logo: <img src={Cardano}></img>,
      Name: "Cardano ADA",
      price: "NGN 106.03",
      change: "-2.57%"
    },
    {
      id: 4,
      logo: <img src={Solana}></img>,
      Name: "Solana SOL",
      price: "NGN 4,839.03",
      change: "+1.54%"
    }
  ];

  const columns = [
    {
        name: "#",
        selector: (row) => data.id
    },
    {
        name: "Name",
        selector: (row) => data.logo +  data.Name
    },
    {
        name: "Price",
        selector: (row) => data.price
    },
    {
        name: "Change",
        selector: (row) => data.change
    },
    {
        name: "Chart",
        selector: (row) => []
    },
    {
        name: "Trade",
        selector: (row) => payButton
    }
  ];

  return (
        <div>
            <Table 
            columns={columns}
            data={data}           
            progressPending={loading}
            />
        </div>
        );
};

export default Table;
