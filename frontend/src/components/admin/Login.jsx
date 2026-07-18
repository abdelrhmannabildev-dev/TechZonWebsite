import {adminLogin} from "../../api/admin/adminAuthApi";
import {adminGetInfo} from "../../api/admin/adminAuthApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        getData();
        
    }, []);
    const getData = async () => {
        const token = localStorage.getItem("token");
        if (token) {
        const data = await adminGetInfo();
        if (data) {
            navigate("/admin");
        }
    }}
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
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="loginSubmit">Log in</button>
                </div>
            </form>
        </div>
  )
}


export default Login