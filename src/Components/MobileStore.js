import Header from "./Header";
import Items from "./Items";
import "../storeStyle.css";
import {stocks} from "./stocks";

function MobileStore(){
    let mobiles = stocks.filter((item)=>{
        return item.category === 'mobile';
    })
    return(
    <div>
        <Header/>
        <div className="store">
            <div className="side">
                
            </div>
            <div className="app">
                {mobiles.map((mobile) => {
                    return <Items key={mobile.id} item = {mobile} />
                })
            }
            </div>
        </div>
    </div>
    );
}
export default MobileStore;