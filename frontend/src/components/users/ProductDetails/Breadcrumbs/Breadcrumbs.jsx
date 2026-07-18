import { useNavigate } from "react-router-dom"
import "./Breadcrumbs.css"
function Breadcrumbs() {
    const navigate = useNavigate()
  return (
    <div className="breadcrumbs">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/products")}>Products</button>
        <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Breadcrumbs