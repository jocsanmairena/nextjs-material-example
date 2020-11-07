import React from 'react'
// @material-ui/core
import { useScrollTrigger } from '@material-ui/core'

function ElevationScroll (props) {
  const { children } = props
  // Material UI Hook that checks events when the user scrolls
  const trigger = useScrollTrigger({
    // Delay when user is scrolling is disabled
    disableHysteresis: true,
    // How far to scroll before triggering this event listener. When 0 Event handler will act immediately
    threshold: 0
  })

  /* Returns a new version of whatever component you are wrapping with ElevationScroll
  by cloning the children and then returning a copy of that element with a new elevation
  depending on whether or not the trigger has been set */
  /* TODO: Learn how cloneElement works */
  return React.cloneElement(children, {
    // If the user "trigger" the scroll event, then set elevation to 4, else, no elevation:  0.
    elevation: trigger ? 4 : 0
  })
}

export default ElevationScroll
