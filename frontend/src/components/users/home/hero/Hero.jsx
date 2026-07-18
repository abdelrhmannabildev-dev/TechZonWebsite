import "./Hero.css"
import {useNavigate} from "react-router-dom"
import laptop from "./images/laptop2.png"
import { Link } from "react-router-dom"

function Hero() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/products")
    }
    return (
        <div className="hero">
            <div className="hero-txt">
            <h1> أحدث أجهزة التكنولوجيا</h1>
            <p>Upgrade Your Tech Experience</p>
        </div>
            <div className="categories">
                <ul>
                    <li><Link to={"/products?category=accessories"}> <h2>accessories</h2> </Link ></li>
                    <li><Link to={"/products?category=laptop"}> <h2>laptops</h2> </Link ></li>
                    <li><Link to={"/products?category=monitors"}><h2>monitors</h2> </Link ></li>
                    <li><Link to={"/products?categories=storage"}><h2>storages</h2></Link ></li>
                </ul>
            </div>
                {/* <img className="hero-image" src={laptop} alt="Hero" /> */}
            <button className="explore-btn" onClick={handleClick}>استكشف</button>
        </div>
    )   
}
export default Hero