import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store: any = createStore<any, any, any, any>(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// if(typeof (window as any).__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') {
//     if(process.env.NODE_ENV === 'development') {
//         store = createStore<any, any, any, any>(
//             rootReducer,
//             initialState,
//             compose(
//                 applyMiddleware(...middleware),
//                 (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
//             )
//         )
//     } else {
//         store = createStore<any, any, any, any>(
//             rootReducer,
//             initialState,
//             compose(
//                 applyMiddleware(...middleware)
//             )
//         )    
//     }
// } else {
//     store = createStore<any, any, any, any>(
//         rootReducer,
//         initialState,
//         compose(
//             applyMiddleware(...middleware)
//         )
//     )    
// }

export default store;
