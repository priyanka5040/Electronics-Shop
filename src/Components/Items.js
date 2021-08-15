import image from "./images/mobiles/mob3.jpg";
import "../storeStyle.css";

function Items(props) {
    
    return(
        <div className="items">
            <img src={image} alt="img"/>
            <div className="description">
                <h2 className="desc">Samsung galaxy</h2>
                <div className="desc"><button className="addToCart"  onClick={() =>{

                }}>Add to cart</button></div>

            </div>
        </div>
    );
}
export default Items;