import { useNavigate } from 'react-router-dom'
import signupService from '../services/signupService'
import { useState } from 'react'

const Signup = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () =>{
        navigate('/')
    }
    const handleSignup = async(event) =>{
        event.preventDefault()
        try {
        const response = await signupService.createUser({username,email,password})
        setEmail('')
        setUsername('')
        setPassword('')
        if(response.status === 201){
            navigate('/')
        }
    } catch (exception) {
        console.log(exception)
    }
    }
    return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    email: <input value={email} onChange={({ target }) => setEmail(target.value)}/>
                </div>
                <div>
                    username: <input value={username}  onChange={({ target }) => setUsername(target.value)}/>
                </div>
                <div>
                    password: <input value={password} type='password' onChange={({ target }) => setPassword(target.value)}/>
                </div>
                <button type='submit'>signup</button>
            </form>
            <button onClick={handleLogin}>login</button>
        </div>
    )
}
export default Signup