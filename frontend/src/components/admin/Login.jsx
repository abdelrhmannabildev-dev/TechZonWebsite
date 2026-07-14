import {adminLogin} from "../../api/admin/adminAuthApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/admin");
        }
    })
    const handleSubmit =async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        ;
        try {
            const response = await adminLogin(username, password);
            const token = response.token;
            localStorage.setItem("token", token);
            navigate("/admin");
        } catch (error) {
            console.error(error);
        }
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