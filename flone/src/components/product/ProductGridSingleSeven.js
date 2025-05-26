import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";
import { Link } from "react-router-dom";



const ProductGridSingleSeven = ({
  product,
  currency,

  wishlistItem,
  compareItem,

  spaceBottomClass,
  colorClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);


  return (
    <Fragment>
        <div
          className={clsx("product-wrap-7", spaceBottomClass, colorClass)}
        >
          <div className="product-img">
          <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img
                className="default-img"
                src={process.env.PUBLIC_URL + product.image[0]}
                alt=""
              />
              {product.image.length > 1 ? (
                <img
                  className="hover-img"
                  src={process.env.PUBLIC_URL + product.image[1]}
                  alt=""
                />
              ) : (
                ""
              )}
           </Link>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="pink">-{product.discount}%</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}

            <div className="product-action-2">
            
              <button onClick={() => setModalShow(true)} title="Quick View">
                <i className="fa fa-eye"></i>
              </button>

            
            </div>
            <div className="pro-wishlist-2">
             
            </div>
          </div>
          <div className="product-content-2">
            <div className="title-price-wrap-2">
              <h3>
              <div className="product-action-2">
            
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                  {product.name}
                </Link>
            </div>
              </h3>
            
            </div>
          </div>
        </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      />
    </Fragment>
  );
};

ProductGridSingleSeven.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  wishlistItem: PropTypes.shape({})
};

export default ProductGridSingleSeven;