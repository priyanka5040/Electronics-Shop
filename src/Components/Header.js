import "../headerStyle.css";
import logo from "./images/logo.jpg";
import cart from "./images/cart.png";

function Header(props) {
    let {setCurrentPage} = props;

    return <div className = "header">
        <div><li href="#"><img className = "logo" src = {logo} alt="logo" /></li></div>
        <div className = "nav" onClick={
            (event) => {
                if(event.target.className === "navItems"){
                    console.log(event.target);
                    setCurrentPage(event.target.id);

                }
            }
        }>
            <div><li id="mobile" className = "navItems">Mobile Phones</li></div>
            <div><li id="headphone" className = "navItems">Headphones</li></div>
            <div><li id="watch" className = "navItems">Watches</li></div>
            <div><li id="laptop" className = "navItems">Laptops</li></div>
        </div>
        <div className = "cartContainer"  id="cart" onClick={
            (event) => {
                console.log(event.target);
                setCurrentPage(event.target.id); 
            }
        }><img id="cart" className = "cartIcon" src = {cart} alt="cart" /></div>
        
    </div>
}
export default Header;