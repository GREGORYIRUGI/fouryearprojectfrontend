import React from "react"
import './Components.css'
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Credits from "./Credit";


export default function Header(){
    // const navItems={
    //     header:"header",
    //     credit:"credit",
    //     about:"about"
    // }
    // const unpackedNav = navItems.map(
    //     item => {

    //     }
    // )
    const navItemStyle = {
        padding: "10px",
        listStyle: "none",
        display: "inline-block",
        margin: "0 10px",
        background: "azure",
        borderRadius: "5px"
    };

    const navStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "lightblue",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000
    };

    return (
        <div><nav style={navStyle}>
            <ul>
                <Link to="/" style={navItemStyle} className="navItem">Home </Link>
                <Link to="/about" style={navItemStyle} className="navItem">About</Link>
                <Link to="/credit" style={navItemStyle} className="navItem">Credit</Link>
                <li style={navItemStyle} className="navItem">Signup</li>
            </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/credit" element={<Credits/>}></Route>
        </Routes>
        </div>
    );
    
    
}