import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";

const Page = () => {
  const location = useLocation();
  return (
    <div className="main_container">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/order" component={OrderPage} />
          {/* <Route component={ErrorPage} /> */}
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default Page;
