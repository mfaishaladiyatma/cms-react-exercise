import React from 'react'

const initialState = {
    emailSet: '',
    passwordSet: '',
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        // case 'SET_INPUT_EMAIL':
        //     console.log(action.payload)
        //     return {
        //         ...state,
        //         emailSet: action.payload
        //     }
        // case 'SET_INPUT_PASSWORD':
        //     console.log(action.payload)
        //     return {
        //         ...state,
        //         passwordSet: action.payload
        //     }
        case 'SET_LOGIN':
            console.log(action.payload)
            return {
                ...state,
                emailSet: action.payload.email,
                passwordSet: action.payload.password
            }
        default:
            return state
    }
}
