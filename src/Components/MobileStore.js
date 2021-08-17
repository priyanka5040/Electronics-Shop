import Header from "./Header";
import Items from "./Items";
import "../storeStyle.css";
import {mobiles} from "./stocks";


function MobileStore(){
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