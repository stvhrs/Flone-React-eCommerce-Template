import PropTypes from "prop-types";

const ProductDescriptionInfo = ({
  product,

}) => {

  

  return (
    <div className="product-details-content ml-70">
      <h2>{product.name}</h2>
      <div className="product-details-price">
      
      </div>
      
         <div className="pro-details-list">
              <p dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
            </div>

      <div className="pro-details-quality">
                <div className="pro-details-cart btn-hover">
                  <a
                    href={"https://wa.me/6285601721370?text=Hallo%2C%20bagaimana%20saya%20bisa%20memesan%3F"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Beli Sekarang
                  </a>
                </div>
              </div>
     
      
      

     
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  cartItems: PropTypes.array,
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({})
};

export default ProductDescriptionInfo;
