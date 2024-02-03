const Userinfo = () =>{
    const handleLogout = () =>{
        window.localStorage.clear()
        window.location.reload()
    }
    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
            <table>
                <tbody>
                    <tr>
                        <td>username - Dummy Username</td>
                    </tr>
                    <tr>
                        <td>email - dummy@dummy.com</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}
export default Userinfo