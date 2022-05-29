import React from 'react'

const initialState = {
    username: '',
    // password: '',
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case 'SET_INPUT_EMAIL':
            return {
                ...state,
                ...payload
            }
        case 'SET_INPUT_PASSWORD':
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
