import "../cartStyle.css";

function Cart(props) {
    const {items} = props;

    return(
        <div className="cartList">
            {items.map((ele)=>{
                return<div key={ele.id} className="cart">
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