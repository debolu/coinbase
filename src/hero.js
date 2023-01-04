import React from 'react';
import ReactDOM from 'react-dom'
import Button from './Components/Button';
import { Icon } from '@iconify/react';
 
const Portfolio = () => {
    return (
        <div>
        <div><Icon icon="icon-park:bitcoin" /> Jump start your portfolio →</div>,
        <div>
            <hi>Jump start your crypto portfolio</hi>
            <p>Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</p>
        </div>,
        <div>
            <input type={"email"} placeholder={"Email address"}></input>
            <Button name='Get Started' color='Blue' margin='10px' width='100px' height='30px' radius='10px'></Button>
        </div>
        </div>
    )
}

export default Portfolio;