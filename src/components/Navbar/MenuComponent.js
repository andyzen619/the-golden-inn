import React from 'react'
import { Button, Header, Icon, Modal, Menu } from 'semantic-ui-react'
import MenuSearchComponent from "./MenuSearchComponent"

const MenuStyle = {
  height: "inherit"
}

const MenuComponent = () => (
  <Modal trigger={<Menu.Item position="left">Menu</Menu.Item>} closeIcon style={MenuStyle}>
    <Modal.Content>
      {/*TODO: Menu items go under here */}
      <Header content='Menu' />
      
    </Modal.Content>
    <Modal.Actions>
      {/* <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Yes
      </Button> */}
    </Modal.Actions>
  </Modal>
)

export default MenuComponent
