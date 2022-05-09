import React, { useReducer, useState } from "react";
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import LoginComponent from "../components/LoginComponent";
import apiHelper from "../apis/ApiHelper";
import {API_HOST_URL} from '../shared/appConstants'
import reducer, {initialState} from "../reducer/LoginDetailsReducer";
import { useDispatch,useSelector } from "react-redux";


const LoginContainer = () => {
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
                console.log(response.data)
                dispatch({type:'userDetails',value:response.data})
            }).catch(error => {
                console.log(error)
            })
        })
        
        .catch((err) => {
            err.inner.forEach((ele) => {
                dispatch({type :`${ele.path}Error`, value : ele.message})
            
                
            })
        })
    }

    let history = useHistory();
    if(state.userDetails.auth_token){
        debugger;
        return history.push("/dashboard")
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