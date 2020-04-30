import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navigation.scss";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";

const menuItems = [
  { name: "Home", path: "/", exact: true },
  { name: "Catalog", path: "/catalog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navigation = (props) => {
  const menu = menuItems.map((item) => (
    <li key={item.name} className={item.class}>
      <NavLink to={item.path} exact={item.exact ? item.exact : null}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="Navigation">
      <div className="nav_items">
        <ul>{menu}</ul>
        <div className="cart_btn">
          <Link to="/cart">{`Cart (${props.basketProps.basketNumbers})`}</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navigation);
