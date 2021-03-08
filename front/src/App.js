import React from "react";
import { Store, Product, Cart } from "./screens";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
