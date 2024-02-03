import { useState } from 'react'
import loginService from '../services/loginService'
import { useNavigate } from 'react-router-dom';
const Login = ({setUser}) =>{
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSignup = () => {
        navigate('/signup')
    }
    const handleLogin = async(event) =>{
    event.preventDefault()
    try {
        const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem('loggedBlogAppUser',JSON.stringify(user))
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
        console.log(exception)
    }
}
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    username: <input value={username} onChange={({ target }) => setUsername(target.value)}/>
                </div>
                <div>
                    password: <input value={password} onChange={({ target }) => setPassword(target.value)}/>
                </div>
                <button type='submit'>login</button>
            </form>
            <button onClick={handleSignup}>signup</button>
        </div>
    )
}
export default Login