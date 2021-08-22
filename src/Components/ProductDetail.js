import {useParams} from "react-router-dom";
import Header from "./Header";
import {stocks} from "./stocks.js";
import {cartContext} from "../App";
import {useContext} from "react";
import "../ProductDetail.css";


function ProductDetail(){

    const {id} = useParams();
    const item = stocks.filter((i) => i.id === parseInt(id));
    const prod = item[0];
    let {addToCart} = useContext(cartContext);
    console.log(item);

    return(<>
        <Header />
        <div className="itemDetails">
            <div className="content"><img className = "productImg" src={prod.url} alt={prod.name} /></div>

            <div className="content">
                <h1>{prod.name}</h1>
                <p>{prod.description}</p>
                <h1>Amount - {prod.price}</h1>

                <button className="addTocartBtn" onClick={() =>{
                    addToCart(prod);
                }}>
                Add to cart</button>
            </div>
        </div>
    </>);
}
export default ProductDetail;