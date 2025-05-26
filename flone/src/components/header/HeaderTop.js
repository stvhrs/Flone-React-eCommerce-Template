import PropTypes from "prop-types";

import clsx from "clsx";


const HeaderTop = ({ borderStyle }) => {
 
  return (
    <div className={clsx("header-top-wap", borderStyle === "fluid-border" && "border-bottom")}>
    
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
};

export default HeaderTop;
