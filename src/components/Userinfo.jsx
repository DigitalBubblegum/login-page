const Userinfo = () =>{
    const handleLogout = () =>{
        window.localStorage.clear()
        window.location.reload()
    }
    const userInfo = JSON.parse(window.localStorage.getItem('loggedBlogAppUser'))
    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
            <table>
                <tbody>
                    <tr>
                        <td>username - {userInfo.username}</td>
                    </tr>
                    <tr>
                        <td>email - {userInfo.email}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}
export default Userinfo