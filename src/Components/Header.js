import "../headerStyle.css";
import logo from "./images/logo.jpg";
import cart from "./images/cart.png";
import open from "./images/open.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
    let [sidebar, setSidebar] = useState(false);
    let { cartItems } = props;
    console.log("hfs",cartItems);


    return <div className = "header">
        
        <div className="logoNav">
            <div className="sideIcon"><img src={open} className = "logo" alt="open" onClick={
                ()=>{
                    setSidebar(true);
                }
            } /></div>
            <div><Link to = "/" style={{ textDecoration: 'none'}}><img className = "logo" src = {logo} alt="logo" /></Link></div>
        </div>
        <div className = "nav">

            <div><Link to = "/MobileStore" style={{ textDecoration: 'none'}}><li id="mobile" className = "navItems">Mobile Phones</li></Link></div>
            <div><Link to = "/HeadphoneStore" style={{ textDecoration: 'none'}}><li id="headphone" className = "navItems">Headphones</li></Link></div>
            <div><Link to = "/" style={{ textDecoration: 'none'}}><li id="watch" className = "navItems">Watches</li></Link></div>
            <div><Link to = "/" style={{ textDecoration: 'none'}}><li id="laptop" className = "navItems">Laptops</li></Link></div>

        </div>
        <div style = {sidebar ? {display : 'block'} : {display: 'none'} } className = "sideNav">
            <div><img src="https://www.sendai-airport.co.jp/special/201912winter/m/dist/images/common/btn-pop-close.png" alt="close" onClick={() =>{
                setSidebar(false);
            }}/></div>
            <div className="sideNavMenu">
                <div><Link to = "/MobileStore" style={{ textDecoration: 'none'}}><li id="mobile" className = "navItems">Mobile Phones</li></Link></div>
                <div><Link to = "/HeadphoneStore" style={{ textDecoration: 'none'}}><li id="headphone" className = "navItems">Headphones</li></Link></div>
                <div><Link to = "/" style={{ textDecoration: 'none'}}><li id="watch" className = "navItems">Watches</li></Link></div>
                <div><Link to = "/" style={{ textDecoration: 'none'}}><li id="laptop" className = "navItems">Laptops</li></Link></div>
            </div>
        </div>
        
        
        <div className = "cartContainer">
            {cartItems.length ? <div className = "noOfCart"><h3>{cartItems.length}</h3></div> : <div></div>}
            <Link to = "/Cart"><img className = "cartIcon" src = {cart} alt="cart" /></Link></div>
        
    </div>
}
export default Header;