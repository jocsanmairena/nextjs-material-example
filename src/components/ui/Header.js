import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

function ElevationScroll (props) {
  const { children } = props
  // Material UI Hook that checks events when the user scrolls
  const trigger = useScrollTrigger({
    // Delay when user is scrolling is desabled
    disableHysteresis: true,
    // Event handler will act imediately
    threshold: 0
  })

  /*   Returns a new version of whatever component you are wrapping with ElevationScroll
  by cloning the children and then returning a copy of that element with a new elevation
  depending on whether or not the trigger has been set */
  /* TODO: Learn how clineElement works */
  return React.cloneElement(children, {
    // If the user "trigger" the scroll event, then set elevation to 4, else, no elevation:  0.
    elevation: trigger ? 4 : 0
  })
}

const Header = props => {
  return (
    <ElevationScroll>
      {/* defualt AppBar properties values */}
      <AppBar position='fixed' color='primary'>
        <Toolbar>This is our header</Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
