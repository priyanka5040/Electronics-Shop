import Home from "./Components/Home";
import MobileStore from "./Components/MobileStore";
import HeadphoneStore from "./Components/HeadphoneStore";
import Cart from "./Components/Cart";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/MobileStore" component={MobileStore} />
          <Route path="/HeadphoneStore" component={HeadphoneStore} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
export default App;