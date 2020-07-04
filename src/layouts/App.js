import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";

import { connect } from "react-redux";
import { fetchProductsAction } from "../actions/fetchProductsAction";

import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

import "../styles/App.scss";

function App({ products, fetchProductsAction }) {
  useEffect(() => {
    fetchProductsAction();
  }, [fetchProductsAction]);

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />
        <Page />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default connect(
  (state) => {
    return {
      products: state.basketState.products,
    };
  },
  { fetchProductsAction }
)(App);
