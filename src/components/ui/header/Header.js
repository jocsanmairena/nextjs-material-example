import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// @material-ui/core
import { AppBar, Button, Tabs, Tab, Toolbar } from '@material-ui/core'
// @material-ui/styles
import { makeStyles } from '@material-ui/styles'
// App imports
import logo from '../../../assets/logo.svg'
import ElevationScroll from './ElevationScroll'

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
  The currentTabValue variable holds the index of our current tab. Tab index values start from 0 and end at n-1 index Tab value.
  We handleTabChange with the help of setCurrentTab method*/

  const [currentTab, setCurrentTab] = useState(0)

  const handleTabChange = (e, newIndex) => {
    setCurrentTab(newIndex)
  }
  /**
What does useEffect do? 
By using this Hook, you tell React that your component needs to do something after render.
React will remember the function you passed (we’ll refer to it as our “effect”), 
and call it later after performing the DOM updates. In this effect, we set the current Tab,
but we could also perform data fetching or call some other imperative API.

Why is useEffect called inside a component?
Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

Does useEffect run after every render?
 Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

*/
  useEffect(() => {
    if (window.location.pathname === '/' && currentTab !== 0) {
      setCurrentTab(0)
    } else if (window.location.pathname === '/services' && currentTab !== 1) {
      setCurrentTab(1)
    } else if (window.location.pathname === '/revolution' && currentTab !== 2) {
      setCurrentTab(2)
    } else if (window.location.pathname === '/about' && currentTab !== 3) {
      setCurrentTab(3)
    } else if (window.location.pathname === '/contact' && currentTab !== 4) {
      setCurrentTab(4)
    } else if (window.location.pathname === '/estimate' && currentTab !== 5) {
      setCurrentTab(5)
    }
    // we let useEffect know that we are dependent on the currentTab variable
  }, [currentTab])

  return (
    <>
      <ElevationScroll>
        {/* default AppBar properties values */}
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component='Link'
              to='/'
              onClick={() => setCurrentTab(0)}
            >
              <img alt='company logo' src={logo} className={classes.logo} />
            </Button>
            {/* Tabs use the value attribute to indicate with tab is currently selected */}
            <Tabs
              className={classes.tabContainer}
              value={currentTab}
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
