import React from "react";
import ReactDOM from "react-dom";
import Button from "./Components/Button";

const Nav = [{ id: 1, name: 'explore', link: '#' },
 { id: 2, name: 'Business', link: '#' },
  { id: 3, name: 'learn', link: '#' }]

const header = () => {
    return (
        <div>
            <header>
                <div id="logo-Wrapper">
                    <img alt="The coinbase logo"></img>
                </div>
                <nav className="mainNav">
                    <ul style={{ listStyleType: 'none' }} >
                        {Nav.map((data)=>(
                            <li><a href={data.link}>{data.name}</a></li>
                        ))}
                    </ul>
                </nav>

                <div id="signIn">
                    <div className=""><Button type="submit" name="Get started" href="#" color="blue"></Button></div>
                    <div><a>Sign In</a></div>
                </div>
            </header>
        </div >
    )
}


export default header;