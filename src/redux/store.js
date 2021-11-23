import { createStore,applyMiddleware } from 'redux'
import { rootReducer } from '../redux/reducers/index'
import  thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initial = {
     
}


export const store = createStore(rootReducer,initial, composeWithDevTools(applyMiddleware(thunk))) 