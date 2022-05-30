import React from 'react'

const initialState = {
    email: '',
    password: '',
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case 'SET_INPUT_EMAIL':
            console.log(state)
            console.log(action.payload)
            return {
                email : action.payload
            }
        case 'SET_INPUT_PASSWORD':
            return {
                password: action.payload
            }
        default:
            return state
    }
}
