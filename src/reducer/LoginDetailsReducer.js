export const initialState = {
    username: '',
    password: '',
    usernameError: null,
    passwordError: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "username":
            return { ...state, username: action.value, usernameError:null}
        case "password":
            return { ...state, password: action.value,passwordError:null }
        case "usernameError":
            return { ...state, usernameError: action.value }
        case "passwordError":
            return { ...state, passwordError: action.value }
        default:
            throw new Error();
    }

}

export default reducer
