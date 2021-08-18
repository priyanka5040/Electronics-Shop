import Header from "./Header";
import Items from "./Items";
import "../storeStyle.css";
import {stocks} from "./stocks";

function HeadphoneStore(){
    let headphones = stocks.filter((item)=>{
        return item.category === 'headphone';
    })
    return(
    <div>
        <Header/>
        <div className="store">
            <div className="side">
               
            </div>
            <div className="app">
                {headphones.map((headphone) => {
                    return <Items key={headphone.id} item = {headphone} />
                })
            }
            </div>
        </div>
    </div>
    );
}
export default HeadphoneStore;