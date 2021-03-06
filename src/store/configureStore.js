import { createStore, combineReducers, compose } from 'redux';
import placesReducer from './reducers/places';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  placesReducer: placesReducer,
  authReducer: authReducer
});

// ----------------------------------------
// Para Debugging con React Native Debugger
let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
// ----------------------------------------

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;