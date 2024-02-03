import { useNavigate } from 'react-router-dom';
const Signup = () =>{
    const navigate = useNavigate()
    const handleLogin = () =>{
        navigate('/')
    }
    const handleSignup = () =>{
        console.log('signup')
    }
    return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    email: <input />
                </div>
                <div>
                    username: <input />
                </div>
                <div>
                    password: <input />
                </div>
                <button type='submit'>signup</button>
            </form>
            <button onClick={handleLogin}>login</button>
        </div>
    )
}
export default Signup