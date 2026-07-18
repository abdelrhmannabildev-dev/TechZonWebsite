import style from "./ProductCard.module.css"
import { useNavigate } from "react-router-dom"

function ProductCard(props) {
    const navigate = useNavigate()

    const product = props.product
    const {name,price,quantity, image} = product
return (
    <div className={style.productCard} onClick={() => navigate(`/products/${product.id}`)}>
        <h2 className={style.productName}>{name}</h2>
        <img src={image} alt={name} className={style.productImage}/>
        <div className={style.bottomGroup}>
            <p className={style.productPrice} >Price: {price}</p>
            <p className={style.productQuantity} >Quantity: {quantity}</p>
        </div>
    </div>
)
}

export default ProductCard