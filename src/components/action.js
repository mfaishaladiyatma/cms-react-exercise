const setInputEmail = (input) => ({
    type: 'SET_INPUT_EMAIL',
    payload: input
})

const setInputPassword = (input) => ({
    type: 'SET_INPUT_PASSWORD',
    payload: input
})

export {
    setInputEmail,
    setInputPassword
}