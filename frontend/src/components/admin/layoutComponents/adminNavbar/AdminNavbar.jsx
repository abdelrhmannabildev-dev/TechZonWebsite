import { NavLink } from "react-router-dom";
import "./AdminNavbar.css";
import { useNavigate } from "react-router-dom";
import Profile from "./profile/Profile";
import { useEffect , useState } from "react";
import { adminGetInfo } from "../../../../api/admin/adminAuthApi";
function AdminNavbar() {
    const navigate = useNavigate()
    const [user , setUser] = useState(null)
    const [showProfile, setShowProfile] = useState(false);
    useEffect(() => {

        adminGetInfo().then((data) => {
            setUser(data)    
        })
    }, [])
    const  profileToggle= () => {
        setShowProfile(!showProfile);
    }
    return (
        <nav className="admin-navbar">
            <div className="admin-navbar-inner">
                <div className="admin-logo">
                    <h2>TechZon Admin</h2>
                </div>

                <ul className="admin-links">
                    <li>
                        <NavLink to="/admin" end>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/products">
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/orders">
                            Orders
                        </NavLink>
                    </li>
                </ul>

                <div className="admin-actions">
                    <button className="icon-btn" aria-label="Notifications">
                        🔔
                    </button>
                    <button className="icon-btn" aria-label="Settings">
                        ⚙
                    </button>
                    <button className="profile-btn" aria-label="Profile" onClick={profileToggle}>
                        👤
                    </button>
                    {    
                        showProfile &&
                        <Profile user = {user}/>
                    }
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;