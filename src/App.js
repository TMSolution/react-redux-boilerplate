import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import {configureStore} from './store';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools';
import thunk from "redux-thunk";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));


const store=configureStore(enhancer,{ })

const App = () => (
  <Provider store={store} >
    <Router>
      <ul>
        <li>
          <Link to="/test" >test</Link>
        </li>
      </ul>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/test">
            <div>TEST</div>
          </Route>
        </Switch>
      </Suspense>
      <React.Fragment />
    </Router>
  </Provider>
);


export default App;
