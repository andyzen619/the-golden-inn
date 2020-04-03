import React, { useState } from "react";
import { Responsive, Menu, Header, Image } from "semantic-ui-react";
import MenuSearchComponent from "../MenuSearchComponent";

import { Link } from "react-router-dom";

const DesktopNavbarComponentStyle = {
  divStyle: {
    background: "#b82e26",
    padding: "0 2em"
  }
};

const DesktopNavbarComponent = () => {
  const [bigLogo, setBigLogo] = useState(true);
  const { divStyle } = DesktopNavbarComponentStyle;

  /**
   * Updates to big logo state
   */
  const updateBigLogo = flag => {
    setBigLogo(true);
  };

  /**
   * Updates to small logo state
   */
  const updateSmallLogo = () => {
    setBigLogo(false);
  };

  /**
   *Renders logo according to state
   */
  const generateLogo = () => {
    if (bigLogo) {
      return (
        <Menu.Item style={{ position: "absolute", top: "5%", zIndex: "10" }}>
          <Link to="/">
            <Image
              size="small"
              src="https://i.imgur.com/7SBSyFL.png"
              onClick={updateBigLogo}
            />
          </Link>
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item>
          <Link to="/">
            <Image
              size="tiny"
              src="https://i.imgur.com/wTWZiYT.png"
              onClick={updateBigLogo}
            />
          </Link>
        </Menu.Item>
      );
    }
  };

  return (
    // <Responsive
    //   as={Menu}
    //   {...Responsive.onlyComputer}
    //   style={divStyle}
    //   className="opacity-75"
    //   fluid
    //   secondary
    // >
    //   {/* {generateLogo()} */}
    //   <div>
    // <Menu.Item>
    //   <Link to="/">
    //     {/* <Image
    //     size="tiny"
    //     src="https://i.imgur.com/wTWZiYT.png"
    //     onClick={updateBigLogo}
    //   /> */}
    //     <div>HOME</div>
    //   </Link>
    // </Menu.Item>

    // <Menu.Item name="Menu">
    //   <Link to="/menu">
    //     <Header as="h4" onClick={updateSmallLogo}>
    //       MENU
    //     </Header>
    //   </Link>
    // </Menu.Item>
    //   </div>

    // <Menu.Menu position="right">
    //   <Menu.Item>
    //     <MenuSearchComponent />
    //   </Menu.Item>
    // </Menu.Menu>
    // </Responsive>
    <div
      style={{ background: "#b82e26" }}
      className="flex text-white justify-around py-4"
    >
      <Menu.Item className='flex flex-col justify-center'>
        <Link to="/">
          <div className="text-2xl">HOME</div>
        </Link>
      </Menu.Item>

      <Menu.Item name="Menu" className='flex flex-col justify-center'>
        <Link to="/menu">
          <div className="text-2xl">MENU</div>
        </Link>
      </Menu.Item>

      <Menu.Item name="Menu" className='flex flex-col justify-center'>
        <Link to="">
          <div className="text-2xl">VISIT US</div>
        </Link>
      </Menu.Item>

      <Menu.Item name="Menu" className='flex flex-col justify-center'>
        <Link to="">
          <div className="text-2xl"> HOURS</div>
        </Link>
      </Menu.Item>

      <Menu.Menu className='flex flex-col justify-center'>
        <Menu.Item>
          <MenuSearchComponent />
        </Menu.Item>
      </Menu.Menu>
    </div>
  );
};

export default DesktopNavbarComponent;
