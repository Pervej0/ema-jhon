import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Header/Shop/Shop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderReview from "./Components/OrderReview/OrderReview";
import Inventory from "./Components/ManageInventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route exact path="/" component={Shop} />
          <Route path="/review" component={OrderReview} />
          <Route path="/inventory" component={Inventory} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
