import React from "react";
import {useContext} from "react";
import {cartContext} from "../App";
import "../storeStyle.css";
import {Link} from "react-router-dom";

function Items(props) {
    let { item } = props;
    let {addToCart} = useContext(cartContext);
    //console.log(addToCart);
    let url = "./ProductDetail/"+item.id;

    return(
        <div className="items">
            <Link to={url}><img src={item.url} alt="img"/></Link>

            <div className="description">
                <h2 className="desc">{item.name}</h2>
                <p className="desc">{item.description}</p>
                <h3 className="desc">Rs.{item.price}</h3>
                
                <div className="desc"><button className="addToCart"  onClick={() =>{
                    addToCart(item);
                }}>
                    Add to cart</button></div>
            </div>
        </div>
    );
}
export default Items;