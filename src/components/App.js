// Other React imports
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// @material-ui/styles
import { ThemeProvider } from '@material-ui/styles'
// App imports
import Header from './ui/Header'
import theme from './ui/Theme'
const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route exact path='/services' component={() => <div>services</div>} />
          <Route
            exact
            path='/custom-software'
            component={() => <div>custom software</div>}
          />
          <Route
            exact
            path='/mobile-apps'
            component={() => <div>mobile apps</div>}
          />
          <Route exact path='/websites' component={() => <div>websites</div>} />
          <Route
            exact
            path='/revolution'
            component={() => <div>revolution</div>}
          />
          <Route exact path='/about' component={() => <div>about</div>} />
          <Route exact path='/contact' component={() => <div>contact</div>} />
          <Route exact path='/estimate' component={() => <div>estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </>
)

export default App
