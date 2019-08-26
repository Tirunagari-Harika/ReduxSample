import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers} from "redux";
import { Provider } from "react-redux";
import { counterReducer } from "./Components/ReduxCounters/store/reducers/counterReducer";
import { resultsReducer } from "./Components/ReduxCounters/store/reducers/resultsReducer";
/* import { addCounterReducer } from "./Components/ReduxCounters/store/reducers/addCounterReducer";
import { decCounterReducer } from "./Components/ReduxCounters/store/reducers/decCounterReducer"; */

const rootReducer = combineReducers({
    count: counterReducer,
    results: resultsReducer
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
