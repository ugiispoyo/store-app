import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState: any = {};
const middleware: any = [thunk];

const reduxDevTools =
    (window as any)?.__REDUX_DEVTOOLS_EXTENSION__
    && (window as any)?.__REDUX_DEVTOOLS_EXTENSION__();

const customCompose =
    typeof reduxDevTools !== 'undefined' &&
        process.env.NODE_ENV === 'development' ?
        /* === With Redux Devtools === */
        compose(
            applyMiddleware(...middleware),
            reduxDevTools
        )
        :
        compose(
            applyMiddleware(...middleware)
        )

const store: any = createStore<any, any, any, any>(
    rootReducer,
    initialState,
    customCompose
);

export default store;
