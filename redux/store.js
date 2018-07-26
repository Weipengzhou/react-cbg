import {createStore, applyMiddleware,combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

function configureStore() {
  const store = createStore(
    rootReducer,
    global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
  )



  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  // run the rootSaga initially
  store.runSagaTask()
  return store
}

export default configureStore