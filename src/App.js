import React from 'react' 
import styled from 'styled-components' 
import PropTypes from 'prop-types'
import Toolbar from './Components/Toolbar' 
import SideDrawer from './Components/SideDrawer' 
import Backdrop from './Components/Backdrop'
import GlobalStyle from './theme/GlobalStyle'


const handleDrawerOpen = props => {
  const [ toggle , setToggle] = React.useState(false);
  return { props => setToggle( !toggle)}
}  

const App = ({className}) => (
        
     <div className={className}>
     <GlobalStyle />
     <Toolbar />
     { toggle ? <SideDrawer /><Backdrop />  : ''}       
     <main className='content'><p>This is the page content!</p></main>
    </div>
  );
 
  App.propTypes = {
    className: PropTypes.string
  }
  
  const StyledApp = styled(App)`
  .content{
    margin-top: 64px;
  }
  `
StyledApp.displayName = 'App'

export default StyledApp;