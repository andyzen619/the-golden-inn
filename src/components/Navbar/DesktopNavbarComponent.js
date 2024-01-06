import React from "react";
import { Menu } from "semantic-ui-react";
import MenuSearchComponent from "./MenuSearchComponent";
import Scroll from "react-scroll";
import { Link } from "react-router-dom";

const ScrollLink = Scroll.Link;
const DesktopNavbarComponent = () => {
  const textStyle = "text-sm sm:text-2xl hover:font-semibold text-white";

  return (
    <div
      style={{ background: "#b82e26" }}
      className="flex text-white justify-around py-4"
    >
      <Menu.Item className="flex flex-col justify-center">
        <Link to="/">
          <div className={`${textStyle}`}>HOME</div>
        </Link>
      </Menu.Item>

      <Menu.Item name="Menu" className="flex flex-col justify-center">
        <Link to="/menu">
          <div className={`${textStyle}`}>MENU</div>
        </Link>
      </Menu.Item>

      <Menu.Item name="Menu" className="flex flex-col justify-center">
        <ScrollLink to="visit_us">
          <Link to="/">
            <button className={`${textStyle}`}>VISIT US</button>
          </Link>
        </ScrollLink>
      </Menu.Item>

      <Menu.Item name="Menu" className="flex flex-col justify-center">
        <Link to="/">
          <ScrollLink to="hours">
            <button className={`${textStyle}`}> HOURS</button>
          </ScrollLink>
        </Link>
      </Menu.Item>

      <Menu.Menu className="flex flex-col justify-center">
        <Menu.Item>
          <MenuSearchComponent />
        </Menu.Item>
      </Menu.Menu>
    </div>
  );
};

export default DesktopNavbarComponent;
