import image from "./images/mobiles.jpg";
import "../storeStyle.css";

function Items() {
    return(
        <div className="items">
            <img src={image} alt="img"/>
        </div>
    );
}
export default Items;