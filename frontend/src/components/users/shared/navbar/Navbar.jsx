import { Link,useNavigate } from "react-router-dom"
import "./Navbar.css"
function Navbar() {
    const navigate = useNavigate()
    const handleCard = () => {
        navigate("/cart")    
    }
    return (
        <nav className="navbar">
            <div className="logo"><h1>TECH ZONE</h1></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="cart">
                <button className="cart-icon" onClick={handleCard}>🛒</button>
            </div>
        </nav>
    )
}

export default Navbar