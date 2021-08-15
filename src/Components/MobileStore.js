import Header from "./Header.js";
import Items from "./Items.js";
import "../storeStyle.css";

function MobileStore(){
    let mobiles = [ {id:1,name:"abc",price : 123,stock : 5},
                    {id:2,name:"abc",price : 123,stock : 5},
                    {id:3,name:"abc",price : 123,stock : 5},
                    {id:4,name:"abc",price : 123,stock : 5},
                    {id:5,name:"abc",price : 123,stock : 5},
                    {id:6,name:"abc",price : 123,stock : 5},
                    {id:6,name:"abc",price : 123,stock : 5},
                    {id:6,name:"abc",price : 123,stock : 5},
                    {id:6,name:"abc",price : 123,stock : 5}
                    
                ];
    return(<div>

        <Header setCurrentPage = "mobile"/>
        <div className="mobileStore">
            <div className="side">

            </div>
            <div className="app">
                {mobiles.map((mobile) => {
                    return <Items mobile = {mobile}/>
                })
            }
            </div>
        </div>

    </div>);
}
export default MobileStore;