import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navigation.scss";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { name: "Home", path: "/", exact: true },
  { name: "Catalog", path: "/catalog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

class Navigation extends Component {
  state = {
    burgerActivated: false,
  };

  handleBurger = () => {
    this.setState({
      burgerActivated: !this.state.burgerActivated,
    });
  };

  render() {
    const menu = menuItems.map((item) => (
      <li key={item.name} className={item.class}>
        <NavLink
          to={item.path}
          exact={item.exact ? item.exact : null}
          onClick={this.handleBurger}
        >
          {item.name}
        </NavLink>
      </li>
    ));
    return (
      <div
        className={
          this.state.burgerActivated ? "Navigation active" : "Navigation"
        }
      >
        <div className="nav_items">
          <ul>{menu}</ul>
          <Link to="/cart" className="cart_btn" onClick={this.handleBurger}>
            <span className="ico">
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            {`Cart (${this.props.basketProps.basketNumbers})`}
          </Link>
          <div
            className={this.state.burgerActivated ? "burger active" : "burger"}
          >
            {this.state.burgerActivated ? (
              <FontAwesomeIcon icon={faTimes} onClick={this.handleBurger} />
            ) : (
              <FontAwesomeIcon icon={faBars} onClick={this.handleBurger} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navigation);
