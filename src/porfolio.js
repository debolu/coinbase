import React from 'react';
import Button from './Components/Button';
import { Icon } from '@iconify/react';
 
const Portfolio = () => {
    return (
        <div>
        <div><Icon icon="icon-park:bitcoin" /> Jump start your portfolio →</div>,
        <div>
            <h1>Jump start your crypto portfolio</h1>
            <p>Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</p>
        </div>,
        <div>
            <input type={"email"} placeholder={"Email address"}></input>
            <Button name='Get Started' color='Blue' margin='10px' width='100px' radius='10px'></Button>
        </div>
        </div>
    )
}

export default Portfolio;