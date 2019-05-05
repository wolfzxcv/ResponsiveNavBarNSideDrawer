import React from 'react' 
import styled from 'styled-components' 
import PropTypes from 'prop-types'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


const Toolbar = ({className}) => (
  <header className={className}>
    <nav className='toolbar_nav'>
    <div>
      <DrawerToggleButton />
    </div>
      <div className='toolbar_logo'>
        <a href="/">
         THE LOGO
        </a>
      </div>
      <div className='spacer' />
      <div className='toolbar'>
        <ul>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Document</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

Toolbar.propTypes = {
  className: PropTypes.string
}

const StyledToolbar = styled(Toolbar)`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 56px;
  background: #521751;
  
  .toolbar_nav{
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
  }

  .toolbar_logo{
    margin-left: 1rem;

    a{
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    }
   }
   
  .spacer{
    flex: 1;
  }

  .toolbar ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .toolbar li{
    padding: 0 0.5rem;
  }

  .toolbar a{
    color: white;
    text-decoration: none;

    &:hover, &:active {
    color: #fa923f;
    }

  }
  
   
`
 
StyledToolbar.displayName = 'Toolbar'

export default StyledToolbar;