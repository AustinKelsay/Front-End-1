import React, {useState} from 'react'

//axios util import
import { axiosRequest as axios, setToken } from '../../utils/api'
import { getDriver } from '../State/actions/actions'

const Login = (props) => {
    const [error, setError] = useState()
    const [data, setData] = useState({
        username: '',
        password: '',
        isLoading: false
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios()
            .post('/api/login', data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                setError(error)
                console.log(error)
            })
    }

    return (

        <div className="login-form">
            <h2>Please login.</h2>
            {/* If there's an error, render a div that shows it. */}
            {error && <div className="error">{`${error}`}</div>}
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username" 
                    value={data.username}
                    onChange={handleChange}
                    placeholder="Username"
                    />
                
                <input 
                    type="text"
                    name="password" 
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Password"
                    />
                
                <button type="submit">Login</button>

            </form>


        </div>
    )

}

export default Login;