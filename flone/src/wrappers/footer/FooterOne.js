import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";


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
         
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>Alamat</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={"https://g.co/kgs/XCQ1KBT"}>PILANGREJO, Desa/Kelurahan Genengduwur, Kec. Gemolong, Kab. Sragen, Provinsi Jawa Tengah, Kode Pos: 57247</Link>
                  </li>
                  <li>
                    <Link to={"https://wa.me/8112657512"}>
                    No. Telepon : 08112657512
                    </Link>
                  </li>
                  <li>
                   
                  </li>
                </ul>
              </div>
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