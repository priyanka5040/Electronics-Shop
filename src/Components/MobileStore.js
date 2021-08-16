import Header from "./Header.js";
import Items from "./Items.js";
import "../storeStyle.css";
import {mobiles} from "./stocks";

function MobileStore(){
    return(<div>
        <Header/>
        <div className="store">
            <div className="side">
            </div>
            <div className="app">
                {mobiles.map((mobile) => {
                    return <Items key={mobile.id} item = {mobile}/>
                })
            }
            </div>
        </div>
    </div>);
}
export default MobileStore;