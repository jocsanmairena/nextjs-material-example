import React, { useState } from 'react'
// @material-ui/core
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
// @material-ui/styles
import { makeStyles } from '@material-ui/styles'

// User imported
import logo from '../../assets/logo.svg'

function ElevationScroll (props) {
  const { children } = props
  // Material UI Hook that checks events when the user scrolls
  const trigger = useScrollTrigger({
    // Delay when user is scrolling is desabled
    disableHysteresis: true,
    // Event handler will act imediately
    threshold: 0
  })

  /* Returns a new version of whatever component you are wrapping with ElevationScroll
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
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: '10',
    marginLeft: '25px'
  },
  button: {
    // This line add the css styles defined for the theme.typography.estimate object, defined in the Theme.js file
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px'
  }
}))

const Header = props => {
  const classes = useStyles()

  /* The useState hook is supported by material ui Tabs component.
  The value variable holds the index of our current tab. Tab index values start from 0 and end at n-1 index Tab value.
  We handleTabChange with the help of setValue method*/

  const [value, setValue] = useState(0)

  const handleTabChange = (e, value) => {
    setValue(value)
  }

  return (
    <>
      <ElevationScroll>
        {/* default AppBar properties values */}
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            <img alt='company logo' src={logo} className={classes.logo} />
            {/* Tabs use the value attribute to indicate with tab is currently selected */}
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleTabChange}
              indicatorColor='primary'
            >
              <Tab className={classes.tab} label='Home' />
              <Tab className={classes.tab} label='Services' />
              <Tab className={classes.tab} label='The Revolution' />
              <Tab className={classes.tab} label='About Us' />
              <Tab className={classes.tab} label='Contact Us' />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
