import "../storeStyle.css";

function Items(props) {
    let { item } = props;
    return(
        <div className="items">
            <img src={item.url} alt="img"/>
            <div className="description">
                <h2 className="desc">{item.name}</h2>
                <div className="desc"><button className="addToCart"  onClick={() =>{
                }}>Add to cart</button></div>
            </div>
        </div>
    );
}
export default Items;



