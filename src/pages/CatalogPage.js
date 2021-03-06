import React, { Component } from "react";
import "../styles/CatalogPage.scss";
import Product from "../components/Product";
import Filter from "../components/Filter";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/pageTransition";

class CatalogPage extends Component {
  state = {
    search: "",
    manufacture: "All",
  };

  products = this.props.basketProps.origin;

  list = this.products.map((product) => (
    <Product
      key={product.id}
      image={product.image}
      name={product.name}
      amount={product.amount}
      manufacture={product.manufacture}
      id={product.id}
      numbers={product.numbers}
    />
  ));

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleClear = () => {
    this.setState({
      search: "",
      manufacture: "All",
    });
  };

  filteredList = () => {
    const { search, manufacture } = this.state;
    let results = [...this.list];
    if (manufacture === "All") {
      results = results.filter((item) =>
        item.props.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      let radioResults = results.filter(
        (item) => item.props.manufacture === manufacture
      );
      results = radioResults.filter((item) =>
        item.props.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return results;
  };

  handleRadioChange = (e) => {
    this.setState({
      manufacture: e.target.value,
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.products.length === 0) {
      return <h4>Data loading....</h4>;
    } else {
      return (
        <motion.div
          className="container"
          initial="out"
          exit="out"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >
          <h2 className="header-big">Catalog</h2>

          <div className="Catalog">
            <div className="column-left">
              <Filter
                change={this.handleChange}
                click={this.handleClear}
                value={this.state.search}
                radio={this.handleRadioChange}
                radioVal={this.state.manufacture}
                products={this.products}
              />
            </div>
            <div className="column-right">
              <div className="products">{this.filteredList()}</div>
            </div>
          </div>
        </motion.div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps)(CatalogPage);
