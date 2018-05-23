import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux' 
import { injectGlobal } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import projects from '../../reducers/projects'
import theme from '../../applicationTheme'
import RouterComponent from '../RouterComponent'

const rootReducer = combineReducers({ projects: projects })

const store = createStore(rootReducer)

injectGlobal`
  body { 
    font-family: ${theme.font}
  }
`
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <RouterComponent/>          
          </BrowserRouter>  
        </ThemeProvider>        
      </Provider>
    )
  }
}