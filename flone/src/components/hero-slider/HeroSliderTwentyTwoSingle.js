import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroSliderTwentyTwoSingle = ({ data }) => {
  return (
    <div
      className="single-slider-2 slider-height-2 d-flex align-items-center bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12">
            <div className="slider-content-2 slider-content-2--style2 slider-content-2--style2--white slider-animated-1">
              <h3 className="animated no-style">{data.title}</h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <p className="animated">{data.text}</p>
              <div className="slider-btn btn-hover">
                <Link
                  className="animated rounden-btn"
                  to={"https://wa.me/6285601721370?text=Hallo%2C%20bagaimana%20saya%20bisa%20memesan%3F"}
                >
                  Beli Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderTwentyTwoSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderTwentyTwoSingle;
