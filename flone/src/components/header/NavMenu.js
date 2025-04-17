import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {

  
  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
        <li>
                <Link to={"https://www.instagram.com/gubuk_pustaka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}>
                  {"Instagram"}
                </Link>
              </li><li>
                <Link to={"https://wa.me/6285601721370?text=Hallo%2C%20bagaimana%20saya%20bisa%20memesan%3F"}>
                  {"Whatsapp"}
                </Link>
              </li>
              <li>
                <Link to="https://www.tiktok.com/@gubook.store?_t=ZS-8umT5pVfE7L&_r=1">
                  {"Tiktok"}
                </Link>
              </li>
              <li>
                <Link to={"https://youtube.com/@gubuk_pustaka?si=fntoq9PF-q3Zi_Ka"}>
                  {"Youtube"}
                </Link>
              </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
