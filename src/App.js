import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Home, Detail } from 'views'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
