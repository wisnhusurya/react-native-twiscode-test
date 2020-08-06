import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer/index';
import thunk from 'redux-thunk';
import Interceptor from '../middleware';

Interceptor()

const enhancers = []
if(process.env.NODE_ENV === 'development') {
    const devToolsExtention = window.__REDUX_DEVTOOLS_EXTENSION__

    if(typeof devToolsExtention === 'function') {
        enhancers.push(devToolsExtention)
    }
}
const composedEnhancers = compose(
    applyMiddleware(thunk),
    ...enhancers
)
const store = createStore(rootReducer, composedEnhancers)
export default store