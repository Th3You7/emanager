import React from "react";
import { Store, Product, Cart, Admin, AllProducts } from "./screens";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/store" />
        </Route>
        <Route path="/store/:ctgry?">
          <Store />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart/:id?">
          <Cart />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route path="/admin/allproducts">
          <AllProducts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
