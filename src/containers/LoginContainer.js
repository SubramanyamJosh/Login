
import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";


const LoginContainer = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        console.log(username)
        console.log(password)
    }

    return (
        <LoginComponent
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            onLogin={onLogin}
        />
    )
}

export default LoginContainer