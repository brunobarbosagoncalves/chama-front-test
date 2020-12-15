import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'redux/reducer'
import sagaRoot from 'redux/saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer

const store = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  //composeWithDevTools + webplugin reduxTools can see infos of stores
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

const persistor = persistStore(store) // used to create the persisted store, persistor will be used in the next step

//start listen sagas
sagaMiddleware.run(sagaRoot)

export { store, persistor }
