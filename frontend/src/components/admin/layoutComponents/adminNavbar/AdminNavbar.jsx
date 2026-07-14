import { NavLink } from "react-router-dom";
import "./AdminNavbar.css";
import { useNavigate } from "react-router-dom";
function AdminNavbar() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/admin/login");
    }
    return (
        <nav className="admin-navbar">
            <div className="admin-logo">
                <h2>TechZon Admin</h2>
            </div>
            <ul className="admin-links">
                <li>
                    <NavLink to="/admin">
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
                <button className="icon-btn">
                    🔔
                </button>
                <button className="icon-btn">
                    ⚙
                </button>
                <button className="profile-btn">
                    👤
                </button>
                <button className="logout-btn" onClick={() => handleLogout()}>
                    logout 🚪
                </button>
            </div>
        </nav>
    );
}

export default AdminNavbar;