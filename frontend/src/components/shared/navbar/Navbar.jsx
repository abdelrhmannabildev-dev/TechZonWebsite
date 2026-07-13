import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar() {
    return (
        <nav>
            <div className="logo"><h1>TECH ZONE</h1></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">products</Link></li>

            </ul>
        </nav>
    )
}

export default Navbar