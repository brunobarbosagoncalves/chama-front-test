import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { store, persistor } from 'redux/index'

import NotFound from 'pages/notfound'
import Home from 'pages/home'
import History from 'pages/history'

import history from 'services/history'
import { GlobalStyle, Theme } from 'styles'

import 'config/ReactotronConfig'
import 'react-toastify/dist/ReactToastify.css'

export default (props) => (
  <Provider store={store} history={history}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/history" component={History} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
        <ToastContainer />
        <GlobalStyle />
      </ThemeProvider>
    </PersistGate>
  </Provider>
)
