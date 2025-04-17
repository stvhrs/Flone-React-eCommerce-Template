import PropTypes from "prop-types";
import { Fragment,  } from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";

const ProductGridSingleSeven = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName,
  spaceBottomClass,
  colorClass
}) => {


  return (
    <Fragment>
        <div
          className={clsx("product-wrap-7", spaceBottomClass, colorClass)}
        >
          <div className="product-img">
         
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
            
           
           
           
          </div>
          <div className="product-content-2">
            <div className="title-price-wrap-2">
              <h3>
              <Link to={"https://id.shp.ee/xcoRB7w"}>
                  {product.name}
                </Link>
             
              </h3>
             
              
             
            </div>
          </div>
        </div>
      {/* product modal */}
     
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
