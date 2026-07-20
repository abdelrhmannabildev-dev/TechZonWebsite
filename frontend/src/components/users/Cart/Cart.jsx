
import { getProductByIds } from "../../../api/user/productApi"
import { useEffect, useState } from "react"
import CheckOut from "./CheckOut"
import "./Cart.css"
function Cart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const ids = cart.map(item => item.productId)
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductByIds(ids).then(data => {
            setProducts(data)
        })
    },[])
    console.log(cart)
    if (!cart) {
        return (
            <div>
                <h1>Cart is empty</h1>
            </div>
        )
    }
    const handleRemove = (id) => {
        const newCart = cart.filter(item => item.productId !== id)
        localStorage.setItem("cart", JSON.stringify(newCart))
        window.location.reload()
    }
    const total = products.reduce((acc, product) => acc + product.price, 0);
return (
    <div className="cart">
        <h1>Cart</h1>
        {   products &&
            products.map(product => (
                <div key={product.id} className="cart-item">
                    <h2>{product.name}</h2>
                    <p className="cart-price">{product.price}</p>
                    <button onClick={() => handleRemove(product.id)}>Remove</button>
                </div>
            ))
        }
        <p>Total:{total}</p>
        <CheckOut />
    </div>
)
}

export default Cart