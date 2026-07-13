
function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        ;
    }
        
  return (
        <div className="auth logInGroup hidden">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit} className="login">
                <label htmlFor="username">user name</label>
                <input type="text" name="username" className="loginUser" id="loginUser" />
                <label htmlFor="password" >password</label>
                <input type="password" name="password" className="loginPassword" id="loginPassword"/>
                <button type="submit" className="loginSubmit">Log in</button>

            </form>
        </div>    
  )
}


export default Login