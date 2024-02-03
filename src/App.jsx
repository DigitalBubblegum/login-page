import { useState,useEffect } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Userinfo from './components/Userinfo'
import { BrowserRouter as Router,
  Routes, Route, Link,Navigate  } from 'react-router-dom'
function App() {
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])
  
  const [user, setUser] = useState(null)
  console.log('user is',user)
  return (
    <Router>
      <Routes>
        <Route path='/' element={!user?<Login setUser={setUser}/>:<Navigate replace to='/userinfo'/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/userinfo' element={user===null?<Navigate replace to='/'/>:<Userinfo/>}/>  
      </Routes>
    </Router>
  )
}

export default App
