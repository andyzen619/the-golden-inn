import React from "react";
import { Header, Modal, Menu } from "semantic-ui-react";
import MenuListComponenet from "../Menu/MenuListComponent";

const MenuStyle = {
  top: "5%",
  width: "90%",
  height: "80%",
};

const MenuComponent = () => (
  <Modal
    trigger={
      <Menu.Item position="left">
        <div className="text-white text-lg">Menu</div>
      </Menu.Item>
    }
    closeIcon
    style={MenuStyle}
  >
    <Modal.Content
      style={{ maxHeight: "calc(100vh - 10em)", overflow: "auto" }}
    >
      <Header as="h2">Menu</Header>
      <MenuListComponenet />
      <Header sub as="h6">
        Prices are subject to change.**
      </Header>
    </Modal.Content>
  </Modal>
);

export default MenuComponent;
