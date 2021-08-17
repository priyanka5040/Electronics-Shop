import Header from "./Header";
import Items from "./Items";
import "../storeStyle.css";
import {headphones} from "./stocks";


function HeadphoneStore(){
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