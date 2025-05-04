import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import ProductGridSeven from "./ProductGridSeven";

const TabProductEighteen = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  containerClass,
  extraClass
}) => {
  return (
    <div
      className={clsx("product-area", spaceTopClass, spaceBottomClass, extraClass)}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <Tab.Container defaultActiveKey="bestSeller">
          <div className="row mb-60 align-items-center">
            <div className="col-lg-6">
              <div >
                       <h2  ><br></br><br></br>Produk Buku Elkapede</h2>
              </div>
       
            </div>
            <div className="col-lg-6">
              <Nav
                variant="pills"
                className="product-tab-list product-tab-list--style2 justify-content-start justify-content-lg-end"
              >
               
            
              </Nav>
            </div>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGridSeven
                  category={category}
                  type="new"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGridSeven
                  category={category}
                  type="bestSeller"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <div className="row">
                <ProductGridSeven
                  category={category}
                  type="saleItems"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProductEighteen.propTypes = {
  category: PropTypes.string,
  containerClass: PropTypes.string,
  extraClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductEighteen;