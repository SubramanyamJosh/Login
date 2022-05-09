export const initialState = {
    username: '',
    password: '',
    usernameError: null,
    passwordError: null,
    userDetails : {}
}

const reducer = (initialState, action) => {
    switch (action.type) {
        case "username":
            return { ...initialState, username: action.value, usernameError:null}
        case "password":
            return { ...initialState, password: action.value,passwordError:null }
        case "usernameError":
            return { ...initialState, usernameError: action.value }
        case "passwordError":
            return { ...initialState, passwordError: action.value }
        case "userDetails":
            return {...initialState, userDetails : action.value}
        default:
            return initialState
    }

}

export default reducer
