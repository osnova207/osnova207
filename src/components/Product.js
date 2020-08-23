import React, {Component} from "react";
import { productStateTypes } from "../types";
import PropTypes from "prop-types";

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productState: this.props.product.initialProductState
        }
    }

    getMousesUnits(count) {
        if (count <= 0) return;
        if (count === 1) return "мышь в подарок";
        if (count > 1 && count < 5) return "мыши в подарок";
        return "мышей в подарок";
    }

    onProductClick() {
        const { productState } = this.state;
        if (productState === productStateTypes.disabled) return;

        if (productState === productStateTypes.defaultHover) {
            this.setState({productState: productStateTypes.selected});
            return;
        }
        if (productState === productStateTypes.selectedHover || productState === productStateTypes.selected) {
            this.setState({productState: productStateTypes.defaultHover});
        }
    }

    onProductMouseEnter() {
        const { productState } = this.state;
        if (productState === productStateTypes.disabled) return;

        if (productState === productStateTypes.default) {
            this.setState({productState: productStateTypes.defaultHover});
        }
    }

    onProductMouseLeave() {
        const { productState } = this.state;
        if (productState === productStateTypes.defaultHover) {
            this.setState({productState: productStateTypes.default});
        }

        if (productState === productStateTypes.selected) {
            this.setState({productState: productStateTypes.selectedHover});
        }
    }


    render() {
        const { productState } = this.state;
        const { product } = this.props;

        return (
            <div className={`Product ${productState}`}>
                <div className="Product_body"
                     onClick={() => this.onProductClick()}
                     onMouseEnter={() => this.onProductMouseEnter()}
                     onMouseLeave={() => this.onProductMouseLeave()}>
                    <div className="Product_title-block">
                        <div className="label">Сказочное заморское яство</div>
                        <div className="title">Нямушка</div>
                        <div className="sub-title">{product.subTitle}</div>
                    </div>
                    <div className="Product_text-block">
                        <div className="portions">
                        <span className="value">
                            {product.portions}
                            &nbsp;
                        </span>
                            <span className="units">
                            {product.portions ? "порций" : null}&nbsp;&nbsp;&nbsp;
                        </span>
                        </div>
                        <div className="mouses">
                        <span className="value">
                            {product.mouses > 1 ? product.mouses + " " : null}
                        </span>
                            <span className="units">
                            {this.getMousesUnits(product.mouses)}
                        </span>
                        </div>
                    </div>
                    <div className="Product_weight-block">
                        <div className="value">
                            {product.weight}
                        </div>
                        <div className="units">
                            кг
                        </div>
                    </div>
                </div>
                <div className="Product_footer">
                    {productState === productStateTypes.disabled ?
                        <span className="product-ended">Печалька, {product.subTitle} закончился.</span>: null}
                    {productState === productStateTypes.selected || productState === productStateTypes.selectedHover ?
                        <span>{product.footer}</span> : null}
                    {productState === productStateTypes.default || productState === productStateTypes.defaultHover ?
                        <span>Чего сидишь? Порадуй котэ,&nbsp;
                            <span
                                className="buy-product"
                                onClick={() => this.setState({productState: productStateTypes.selected})}
                            >купи</span>
                            <span style={{color: "#107BB0"}}>.</span>
                        </span> : null}
                </div>
            </div>
        )
    }
}

Product.propTypes = {
    content: PropTypes.object.isRequired,
};

Product.defaultProps = {
    content: {},
};

export default Product;