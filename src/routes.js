import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

export const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </div>
);
