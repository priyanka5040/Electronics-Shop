import "../storeStyle.css";
import React from "react";
import {useContext} from "react";
import {cartContext} from "../App";
function Items(props) {
    let { item } = props;
    let {addToCart} = useContext(cartContext);
    //console.log(addToCart);
    return(
        <div className="items">
            <img src={item.url} alt="img"/>
            <div className="description">
                <h2 className="desc">{item.name}</h2>
                <div className="desc"><button className="addToCart"  onClick={() =>{
                    addToCart(item);
                }}>
                    Add to cart</button></div>
            </div>
        </div>
    );
}
export default Items;