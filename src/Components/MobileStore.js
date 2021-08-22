import Items from "./Items";
import "../storeStyle.css";
import {stocks} from "./stocks";
import Filter from "./Filter";
import { useEffect, useState } from "react";

function MobileStore(){
    let [mobiles, setMobiles] = useState([]);

    useEffect(()=>{
        setMobiles(stocks.filter((item)=>{
            return item.category === 'mobile';
        }));

    },[]);

    

    function setFilter(filter){
        if(filter === "all"){
            setMobiles(stocks.filter((item)=>{
                return (item.category === 'mobile');
            }));
        }
        else{
            setMobiles(stocks.filter((item)=>{
                return (item.category === 'mobile' && item.name.includes(filter));
            }));
        }
        
    }

    return(
    <div>
        
        <div className="store">
            <div className="side">
                <Filter setFilter = {setFilter} type="mobile"/>

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