import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    state = {
      menuOpen: false
    };
  
    handleStateChange(state) {
      this.setState({ menuOpen: state.isOpen });
    }
  
    closeMenu() {
      this.setState({ menuOpen: false });
    }
  
    render() {
      return (
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Link className="menu-item" to="/">home</Link>
          <Link className="menu-item" to="/about-me">about</Link>
          <Link className="menu-item" to="/projects">projects</Link>
          <Link className="menu-item" to="/contact">contact</Link>
        </Menu>
      );
    }
  }

  export default Sidebar;
  