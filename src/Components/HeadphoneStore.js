import Header from "./Header";
import Items from "./Items";
import "../storeStyle.css";
import {headphones} from "./stocks";


function HeadphoneStore(props){
    let {cartItems, setCartItems} = props;

    let addToCart = (newItem)=>{
        setCartItems([...cartItems, newItem]);
    }
    return(<div>
        <Header/>
        <div className="store">
            <div className="side">
                
            </div>
            <div className="app">
                {headphones.map((headphone) => {
                    return <Items key={headphone.id} item = {headphone} addToCart={addToCart}/>
                })
            }
            </div>
        </div>
    </div>);
}
export default HeadphoneStore;