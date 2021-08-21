import Header from "./Header";
import Items from "./Items";
import "../storeStyle.css";
import {stocks} from "./stocks";
import Filter from "./Filter";
import { useState, useEffect } from "react";

function HeadphoneStore(){
    //console.log(headphones);
    let [headphones, setMobiles] = useState([]);

    useEffect(()=>{
        setMobiles(stocks.filter((item)=>{
            return item.category === 'headphone';
        }));

    },[]);

    function setFilter(filter){
        if(filter === "all"){
            setMobiles(stocks.filter((item)=>{
                return (item.category === 'headphone');
            }));
        }
        else{
            setMobiles(stocks.filter((item)=>{
                return (item.category === 'headphone' && item.name.includes(filter));
            }));
        }
        
    }


    return(
    <div>
        <Header/>
        <div className="store">
            <div className="side">
                <Filter setFilter={ setFilter } type = "headphone" />

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