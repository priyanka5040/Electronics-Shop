import Home from "./Components/Home";
import MobileStore from "./Components/MobileStore";
import {useState} from "react"

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
        <MobileStore  setCurrentPage = {setCurrentPage}/>
      </>
    )
  }
}

export default App;