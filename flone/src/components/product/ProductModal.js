import {  useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from 'swiper';
import { Modal } from "react-bootstrap";


import Swiper, { SwiperSlide } from "../../components/swiper";



function ProductModal({ product, show, onHide,  }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


 
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true
  };

  const onCloseModal = () => {
    setThumbsSwiper(null)
    onHide()

  }

  return (
    <Modal show={show} onHide={onCloseModal} className="product-quickview-modal-wrapper">
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body">
      <div className="row">
        <div className="col-md-5 col-sm-12 col-xs-12">
          <div className="product-large-image-wrapper">
            <Swiper options={gallerySwiperParams}>
              {product.image &&
                product.image.map((img, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="single-image">
                        <img
                          src={process.env.PUBLIC_URL + img}
                          className="img-fluid"
                          alt="Product"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div className="product-small-image-wrapper mt-15">
            <Swiper options={thumbnailSwiperParams}>
              {product.image &&
                product.image.map((img, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="single-image">
                        <img
                          src={process.env.PUBLIC_URL + img}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 col-xs-12">
          <div className="product-details-content quickview-content">
            <h2>{product.name}</h2>
           
          
            <div className="pro-details-list">
              <p dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
            </div>

            {product.variation ? (
              <div className="pro-details-size-color">
                <div className="pro-details-color-wrap">
                  <span>Color</span>
                  <div className="pro-details-color-content">
                    {product.variation.map((single, key) => {
                      return (
                        <label
                          className={`pro-details-color-content--single ${single.color}`}
                          key={key}
                        >
                          <input
                            type="radio"
                            value={single.color}
                            name="product-color"
                         
                            onChange={() => {
                          
                            }}
                          />
                          <span className="checkmark"></span>
                        </label>
                      );
                    })}
                  </div>
                </div>
               
            
            
              </div>
            ) : (
              ""
            )}
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
        </div>
      </div>
    </div>
  </Modal>
  );
}

ProductModal.propTypes = {
  currency: PropTypes.shape({}),
  discountedprice: PropTypes.number,
  finaldiscountedprice: PropTypes.number,
  finalproductprice: PropTypes.number,
  onHide: PropTypes.func,
  product: PropTypes.shape({}),
  show: PropTypes.bool,
  wishlistItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({})
};

export default ProductModal;
