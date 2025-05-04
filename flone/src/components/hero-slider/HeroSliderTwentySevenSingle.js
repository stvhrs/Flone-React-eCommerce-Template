import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroSliderTwentySevenSingle = ({ data }) => {
  return (
    <div
      className="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res hm-13-slider"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + data.image})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="slider-content-16 slider-animated-1">
              
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <h5
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <br></br>
              <br></br>
              
              <div className="slider-btn btn-hover">
                <Link
                  className="animated"
                  to={"https://id.shp.ee/xcoRB7w"}
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

HeroSliderTwentySevenSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderTwentySevenSingle;
