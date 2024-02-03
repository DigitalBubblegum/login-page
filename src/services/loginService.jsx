import axios from 'axios'
const baseUrl = 'http://localhost:3001/v1/login'
const getStatus = () => {
    return axios.get(baseUrl).then((res)=>res.data)
}

const login = async(credentials) => {
    const response = await axios.post(baseUrl,credentials)
    return response.data
}

const loginService = {
    getStatus,
    login
}
export default loginService