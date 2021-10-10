import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Header/Shop/Shop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderReview from "./Components/OrderReview/OrderReview";
import Inventory from "./Components/ManageInventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";
import PlaceOrder from "./Components/OrderReview/PlaceOrder/PlaceOrder";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import PrivatRoute from "./Components/PrivatRoute/PrivatRoute";
import Shipping from "./Components/OrderReview/Shipping/Shipping";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/shop" component={Shop} />
            <Route exact path="/" component={Shop} />
            <Route path="/review" component={OrderReview} />
            <PrivatRoute path="/inventory">
              <Inventory />
            </PrivatRoute>
            <PrivatRoute path="/order">
              <PlaceOrder></PlaceOrder>
            </PrivatRoute>
            <PrivatRoute path="/shipping">
              <Shipping></Shipping>
            </PrivatRoute>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
