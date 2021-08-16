import "../cartStyle.css";

function Cart(props) {
    let items = [
            {title : "mobile" , price:15000},
            {title : "mobile" , price:15000},
            {title : "mobile" , price:15000},
            {title : "mobile" , price:15000}
          ];
    return(
        <div className="cartList">
            {items.map((ele)=>{
                return<div className="cart">
                        <div>
                            <h1>{ele.title}</h1>
                        </div>
                        <div>
                            <button>-</button><input className="qty" type="text" disabled /><button>+</button>
                        </div>
                        <div>
                            Rs.{ele.price}
                        </div>
                    </div>
                })
            }
        </div>
    );
}
export default Cart;