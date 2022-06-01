const setInputEmail = (input) => ({
    type: 'SET_INPUT_EMAIL',
    payload: input
})

const setInputPassword = (input) => ({
    type: 'SET_INPUT_PASSWORD',
    payload: input
})

const setLogin = (email, password) => ({
    type: 'SET_LOGIN',
    payload: {email, password}
})

export {
    setInputEmail,
    setInputPassword,
    setLogin
}