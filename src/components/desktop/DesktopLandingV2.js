import React, { Fragment } from "react";
import { Modal, Header } from "semantic-ui-react";
import MenuListComponenet from "../../components/menu/MenuListComponent";
import Media from "react-media";
import {Link} from 'react-router-dom'

const DesktopLandingV2 = (prop) => {
  const MenuStyle = {
    top: "5%",
    width: "90%",
    height: "80%",
  };

  return (
    <div
      style={{ height: "600px" }}
      className="flex flex-col justify-center text-white"
    >
      <div className="flex justify-center p-8">
        <div
          style={{ backgroundColor: "#b82e26" }}
          className="px-6 py-24 rounded-full text-3xl opacity-75"
        >
          <div className="flex justify-center text-white opacity-100">GOLDEN INN</div>
          <div className="flex justify-center pt-2 opacity-100">RESTAURANT</div>
        </div>
      </div>
      <div className="flex justify-center text-lg text-center p-4">
        SERVING AUTHENTIC CHINESE FOOD FOR 25 YEARS
      </div>
      <div className="flex justify-center text-black p-2">
        <a href="tel:+613-476-7056">
          <div className="bg-white opacity-75 hover:opacity-100 p-4 px-12 mr-2">
            Order
          </div>
        </a>
        <div className="bg-white opacity-75 hover:opacity-100 p-4 px-12 ml-2">
          <Media queries={{ mobile: "(max-width: 467px)" }}>
            {(matches) => (
              <Fragment>
                {matches.mobile && (
                  <div>
                    <Modal
                      trigger={<div className="text-black text-lg">Menu</div>}
                      closeIcon
                      style={MenuStyle}
                    >
                      <Modal.Content
                        style={{
                          maxHeight: "calc(100vh - 10em)",
                          overflow: "auto",
                        }}
                      >
                        <Header as="h2">Menu</Header>
                        <MenuListComponenet />
                        <Header sub as="h6">
                          Prices are subject to change.**
                        </Header>
                      </Modal.Content>
                    </Modal>
                  </div>
                )}
                {!matches.mobile && <Link to="/menu">Menu</Link>}
              </Fragment>
            )}
          </Media>
        </div>
      </div>
    </div>
  );
};

export default DesktopLandingV2;
