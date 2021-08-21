import "../storeStyle.css";

function Filter(props) {
    const {setFilter, type} = props;
    if(type === "mobile"){
        return(<div className="filter">
            <div className="brands">
                <h2>Filter</h2>
                <div className="partition"></div>
                <h4>Brands</h4>

                <div><input type="radio" name="brand" onChange={()=>{
                    setFilter("Nokia");
                }}/>Nokia</div>
                <div><input type="radio" name="brand" onChange={()=>{
                    setFilter("Samsung");
                }}/>Samsung</div>
                <div><input type="radio" name="brand" onChange={()=>{
                    setFilter("iPhone");
                }} />I phone</div>
                <div><input type="radio" name="brand" onChange={()=>{
                    setFilter("all");
                }} />All brands</div>
                
                
            </div>
            <div className="partition" ></div>

        </div>);
    }
    else{
        return(
            <div className="filter">
            <div className="brands">
                <h2>Filter</h2>
                <div className="partition"></div>
                <h4>Brands</h4>

                <div><input type="radio" name="brand" onChange={()=>{
                    setFilter("Sony");
                }}/>Sony</div>
                <div><input type="radio" name="brand" onChange={()=>{
                    setFilter("Boat");
                }}/>Boat</div>
                <div><input type="radio" name="brand" onChange={()=>{
                    setFilter("JBL");
                }} />JBL</div>
                <div><input type="radio" name="brand" onChange={()=>{
                    setFilter("all");
                }} />All brands</div>
                
                
            </div>
            <div className="partition" ></div>

        </div>
        );
    }

}
export default Filter;