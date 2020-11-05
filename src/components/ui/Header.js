import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// @material-ui/core
import {
  AppBar,
  Button,
  Tabs,
  Tab,
  Toolbar,
  useScrollTrigger
} from '@material-ui/core'
// @material-ui/styles
import { makeStyles } from '@material-ui/styles'

// App imports
import logo from '../../assets/logo.svg'

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
  logoContainer: {
    padding: 0
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

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4)
    } else if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5)
    }
    // we let useEffect know that we are dependent on the value variable
  }, [value])

  return (
    <>
      <ElevationScroll>
        {/* default AppBar properties values */}
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            <Button className={classes.logoContainer} component='Link' to='/'>
              <img alt='company logo' src={logo} className={classes.logo} />
            </Button>
            {/* Tabs use the value attribute to indicate with tab is currently selected */}
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={handleTabChange}
              indicatorColor='primary'
            >
              <Tab
                className={classes.tab}
                component={Link}
                to='/'
                label='Home'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/services'
                label='Services'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/revolution'
                label='The Revolution'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/about'
                label='About Us'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/contact'
                label='Contact Us'
              />
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
