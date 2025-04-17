import PropTypes from "prop-types";
import clsx from "clsx";
import FooterCopyright from "../../components/footer/FooterCopyright";


const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  return (
    <footer className={clsx("footer-area", backgroundColorClass, spaceTopClass, spaceBottomClass, extraFooterClass, spaceLeftClass, spaceRightClass )}>
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            {/* footer copyright */}
            <FooterCopyright
              footerLogo="/assets/img/logo/logo.png"
              spaceBottomClass="mb-30"
            />
          </div>
        
          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-8" : "col-lg-4 col-sm-6"
            }`}
          >
            {/* footer newsletter */}
            
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;
