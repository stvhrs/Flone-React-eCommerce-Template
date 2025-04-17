import PropTypes from "prop-types";

import clsx from "clsx";

const BannerTwentyEight = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="single-banner mb-30">
            
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/a1.png"
                  }
                  alt=""
                  className="img-fluid"
                />
             
            </div>
          </div>
          <div className="col-md-4">

            <div className="single-banner mb-30">
              
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/b1.png"
                  }
                  alt=""
                  className="img-fluid"
                />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerTwentyEight.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerTwentyEight;
