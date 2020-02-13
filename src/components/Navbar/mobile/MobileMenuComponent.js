import React from 'react'
import { Button, Header, Icon, Modal, Menu } from 'semantic-ui-react'
import MenuListComponenet from '../../menu/MenuListComponent';

const MenuStyle = {
  top: '5%',
  width: '90%'
}

const MenuComponent = () => (
  <Modal trigger={<Menu.Item position="left">Menu</Menu.Item>} closeIcon style={MenuStyle} dimmer='blurring'>
    <Modal.Content scrolling>
      <Header content='Menu' />
      <MenuListComponenet/>
    </Modal.Content>
  </Modal>
)

export default MenuComponent
