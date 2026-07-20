import { useNavigate  } from "react-router-dom";
import "./profile.css"
function Profile(props) {
    const navigate = useNavigate()
    const user =props.user
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/admin/login");
    }

    return (
        // <div>{props.user.userName}</div>
    <div className="profile-popup">
        <p>Hello , {user?.username}</p>
        <button className="logout-btn" onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Profile