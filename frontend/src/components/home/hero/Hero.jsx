import "./Hero.css"
import {useNavigate} from "react-router-dom"
import laptop from "./images/laptop2.png"
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
                    <li><h2>لابتوبات </h2></li>
                    <li><h2>موبايلات </h2></li>
                    <li><h2>شاشات </h2></li>
                    <li><h2>إكسسوارات</h2></li>
                </ul>
            </div>
                {/* <img className="hero-image" src={laptop} alt="Hero" /> */}
            <button className="explore-btn" onClick={handleClick}>استكشف</button>
        </div>
    )   
}
export default Hero