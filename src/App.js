import Home from "./Components/Home";
import MobileStore from "./Components/MobileStore";
import ProductDetail from "./Components/ProductDetail";
import HeadphoneStore from "./Components/HeadphoneStore";
import Cart from "./Components/Cart";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import {useState} from "react";


let cartContext = React.createContext([]);


export default function App() {
  let [cartItems, setCartItems] = useState([]);

  let addToCart = (newItem)=>{
    let ids = cartItems.map((item)=>item.id);

    if(!ids.includes(newItem.id)){
      setCartItems([...cartItems, {...newItem, qty:1}]);
    }
  }

  let removeFromCart = (index)=>{
    let newCart = [];
    cartItems.map((item, i)=>{
      if(index !== i){
        newCart.push(cartItems[i]);
      }
      return newCart;
    })
    setCartItems(newCart);
  }


  let modifyCart = (newItem, index)=>{
    let newCart = [];

    cartItems.map((item, i)=>{

      if(index === i){
        newCart.push(newItem);
      }
      else{
        newCart.push(cartItems[i]);
      }
      return newCart;
    })
    setCartItems(newCart);
  }
    return(
      <cartContext.Provider value = {{
        addToCart: addToCart,
        modifyCart : modifyCart,
        removeFromCart : removeFromCart
      }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/MobileStore" component={MobileStore}/>
          <Route path="/HeadphoneStore" component={HeadphoneStore}/>
          <Route path="/ProductDetail/:id" component={ProductDetail}/>
          
          <Route path="/Cart"
            render={(props) => (
              <Cart {...props} cartItems={cartItems} setCartItems={setCartItems}/>
            )}
          />
        </Switch>
      </Router>
      </cartContext.Provider>
    );
  }
export {cartContext};