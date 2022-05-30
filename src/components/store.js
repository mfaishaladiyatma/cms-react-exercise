import React from 'react'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.dispatch({
//     type: 'SET_INPUT_EMAIL',
//     payload: { email: 'admin' }
// })
// store.dispatch({
//     type: 'SET_INPUT_PASSWORD',
//     payload: { password: 'admin123' }
// })

// console.log(store.getState())

export default store
