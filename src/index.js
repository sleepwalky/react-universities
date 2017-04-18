import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Route } from 'react-router';

import { ConnectedRouter } from 'react-router-redux';

import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import { universities } from './reducers/universitiesReducer';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        universities: universities,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/search" component={App}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
