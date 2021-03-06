import "../cartStyle.css";
import {React, useContext} from "react";
import {cartContext} from "../App";

function Cart(props) {

    const {cartItems} = props;
    let {modifyCart, removeFromCart} = useContext(cartContext);
    let total = 0;
    if(cartItems.length === 0){
        return(<div>
            
            <h1 style={{textAlign : 'center', marginTop : '5%'}}>Your cart is empty</h1>
        </div>

        )
    }
    
    return(<>
        
        <div className="cartList">

            {cartItems.map((ele, index)=>{
                
                total += ele.price * ele.qty;
                return<div key={ele.id} className="cart">
                        <div className="cartItem">
                            <img className="cartItemImg" src={ele.url} alt={ele.name}/>
                            <h3>{ele.name}</h3>
                        </div>

                        <div className="cartItem">
                            <button onClick={
                                ()=>{
                                    if(ele.qty > 1){
                                        let qty = ele.qty - 1 ;
                                        const newItem = {...ele, qty:qty};
                                        modifyCart(newItem, index);
                                    }
                                    
                                }
                            } style={{color:'red'}}>-</button ><input className="qty" value={ele.qty} type="text" disabled />
                            <button onClick={
                                ()=>{
                                    let qty = ele.qty + 1 ;
                                    const newItem = {...ele, qty:qty};
                                    modifyCart(newItem, index);
                                }
                            } style={{color:'green'}}>+</button>
                        </div>

                        <div className="cartItem">
                            Rs. <b>{ele.price * ele.qty}</b>
                        </div>

                        <div className="removeItem">
                            <img src="https://icon-library.com/images/delete-icon/delete-icon-13.jpg" alt="removeItem" onClick = {
                                ()=>{
                                    removeFromCart(index);
                                }
                            }/>
                        </div>
                         
                    </div>
                })
                    
            }
            
        </div>
        <div className="checkout">
            <h1>Total Amount - Rs. {total}</h1>
        </div>
        </>

    );
    
}

export default Cart;