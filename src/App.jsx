import { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Userinfo from './components/Userinfo'
import { BrowserRouter as Router,
  Routes, Route, Link,Navigate  } from 'react-router-dom'
function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/userinfo' element={user?<Userinfo/>:<Navigate replace to='/'/>}/>  
      </Routes>
    </Router>
  )
}

export default App
