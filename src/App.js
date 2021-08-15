import Home from "./Components/Home";
import Cart from "./Components/Cart";
import MobileStore from "./Components/MobileStore";
import {useState} from "react";

let items = [
      {id:1, title : "mobile" , price:15000},
      {id:2, title : "mobile" , price:15000},
      {id:3, title : "mobile" , price:15000},
      {id:4, title : "mobile" , price:15000}
];

function App() {
  let[currentPage, setCurrentPage] = useState("home");

  if(currentPage === "home"){
    return (
      <><Home setCurrentPage = {setCurrentPage}/></>
    );
  }
  else if(currentPage === "mobile"){
    return(
      <>
        <MobileStore setCurrentPage = {setCurrentPage}/>
      </>
    )
  }
  else if(currentPage === "cart"){
    return(
      <>
        <Cart items = {items} setCurrentPage = {setCurrentPage}/>
      </>
    )
  }
}

// function App() {
//     let items = [
//       {title : "mobile" , price:15000},
//       {title : "mobile" , price:15000},
//       {title : "mobile" , price:15000},
//       {title : "mobile" , price:15000}
//     ]
//     return(
//       <div>
//         <Cart items = {items}/>
//       </div>
//     )
//   }

export default App;