import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'

export const configureStore = (preloadState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];
    const composeEnhancer = compose(...storeEnhancers);

    const store = createStore(rootReducer,preloadState,composeEnhancer)


    return  store;

} 