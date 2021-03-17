import React from "react";
import { Store, Product, Cart, Admin } from "./screens";
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
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
