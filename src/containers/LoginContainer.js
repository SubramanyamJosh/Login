import React, { useReducer, useState } from "react";
import * as yup from 'yup'
import LoginComponent from "../components/LoginComponent";
import apiHelper from "../apis/ApiHelper";
import {API_HOST_URL} from '../shared/appConstants'
import reducer, {initialState} from "../reducer/LoginDetailsReducer";


const LoginContainer = () => {
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [usernameError, setUsernameError] = useState(null);
    // const [passwordError, setPasswordError] = useState(null);
    const [state,dispatch] = useReducer(reducer,initialState)

    let schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().min(6)
    })

    const onLogin = () => {
        dispatch({type:'usernameError',value :null})
        dispatch({type:'passwordError',value :null})
        schema.validate({ username : state.username, password:state.password }, { abortEarly: false })
        .then(() => {
            apiHelper('post',API_HOST_URL,{username : state.username,password: state.password,type:'normal'}).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        })
        
        .catch((err) => {
            err.inner.forEach((ele) => {
                dispatch({type :`${ele.path}Error`, value : ele.message})
                // if (ele.path === 'username') {
                //     setUsernameError(ele.message)
                // } 
                
                // if (ele.path === 'password') {
                //     setPasswordError(ele.message)
                // } 
                
            })
        })
    }



    return (
        <LoginComponent
            // username={username}
            // password={password}
            // setUsername={setUsername}
            // setPassword={setPassword}
            onLogin={onLogin}
            // usernameError={usernameError}
            // passwordError={passwordError}
            state={state}
            dispatch={dispatch}
        />
    )
}

export default LoginContainer