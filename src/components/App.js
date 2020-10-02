import React from 'react'
import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/styles'
import theme from './ui/Theme'
const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Header>This is my header</Header>
    </ThemeProvider>
  </>
)

export default App
