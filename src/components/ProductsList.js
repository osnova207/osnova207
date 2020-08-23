import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductsList = ({ content }) =>  {

    return (
        <div className="ProductsList">
            {content.map((product) => <Product key={product.id} product={product} />)}
        </div>
    )
};

ProductsList.propTypes = {
    content: PropTypes.array.isRequired,
};

ProductsList.defaultProps = {
    content: [],
};

export default ProductsList;