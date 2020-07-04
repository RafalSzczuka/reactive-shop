import React from "react";
import { DetailsWidget, Header } from "../styles/ProductDetails";
import AddButton from "./AddButton";
import { Link } from "react-router-dom";
import { CatalogBtn } from "../styles/CatalogBtn";

const ProductDetails = ({ name, amount, category, image }) => {
  return (
    <DetailsWidget className="container">
      <Header>{name}</Header>
      <h3 className="category">{category}</h3>
      <div className="wrapper">
        <div className="img_container">
          <img src={image} alt={name} />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          eius, dolorum sint quisquam quas dicta nulla autem cum saepe,
          recusandae iusto nostrum ipsam tenetur? Provident dignissimos dolore
          necessitatibus sint id. Pariatur dicta quo cumque nemo necessitatibus
          tenetur tempora. Perferendis, fugit. Ipsam, exercitationem, officiis
          autem necessitatibus suscipit optio, esse non enim impedit aliquam
          harum. Praesentium ratione totam commodi, nisi mollitia incidunt!
          Maiores et illum deserunt sed quia, porro eum dolor delectus, fugit,
          reprehenderit expedita voluptatum.
        </p>
      </div>
      <div className="wrapper">
        <div className="column_right">
          <div className="buttons">
            <div className="add_to_cart">
              <span>Price: {amount}$</span>
              <AddButton product={{ name }}></AddButton>
            </div>
            <Link
              to="/catalog"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <CatalogBtn className="catalog">Catalog</CatalogBtn>
            </Link>
          </div>
        </div>
      </div>
    </DetailsWidget>
  );
};

export default ProductDetails;
