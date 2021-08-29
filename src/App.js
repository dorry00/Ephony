import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Default from "./Components/Default";
import Details from "./Components/Details";
import Modal from "./Components/Modal";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
