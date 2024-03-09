import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './Component/Nav/Nav';
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import SearchPage from "./Pages/SearchPage";
import OnePrduct from "./Pages/OnePrduct";
import CategoryProduct from "./Pages/CategoryProduct";
import Cart from "./Pages/Cart";
import SignLogin from "./Component/LoginSignUp/SignLogin";
import NewsBar from "./Component/news-bar/NewsBar";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Switch>


          <Route exact path={"/"} component={Home} />



          <Route exact path={"/Products"} component={Products} />

          <Route exact path={"/Cart"} component={Cart} />

          <Route exact path={"/SearchPage"} component={SearchPage} />

          <Route exact path={"/Cart"} component={Cart} />

          <Route exact path={"/CategoryProduct"} component={CategoryProduct} />


          <Route exact path={"/OnePrduct/:id"} component={OnePrduct} />



          <Route exact path={"/SignLogin"} component={SignLogin} />

          <Route exact path={"/NewsBar"} component={NewsBar} />


        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
