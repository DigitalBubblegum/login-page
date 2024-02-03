import axios from 'axios';
const baseUrl = 'http://localhost:3001/v1/signup'
const getStatus = () =>{
    return axios.get(baseUrl).then(res=>res.data)
}

const createUser = async(user) =>{
    const response = await axios.post(baseUrl,user)
    return response
}

const signupService = {
    getStatus,
    createUser
}

export default signupService