import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/styles'

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

/* We pass theme as a parameter in order in orde to copy mixins.toolbar Object styles with the spread operator
and now we can apply them to components */
const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  }
}))

const Header = props => {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        {/* defualt AppBar properties values */}
        <AppBar position='fixed' color='primary'>
          <Toolbar>
            <Typography variant='h3'>This is our header</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
