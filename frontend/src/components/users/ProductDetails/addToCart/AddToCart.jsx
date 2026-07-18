import { useRef } from "react";
import "./AddToCart.css";

function AddToCart({ productId }) {
    const quantityRef = useRef();

    const handleAddToCart = () => {
        const quantity = Number(quantityRef.current.value);

        if (quantity < 1) return;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(
            item => item.productId === productId
        );

        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({
                productId,
                quantity
            });
        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );
    };

    return (
        <>
            <input
                type="number"
                ref={quantityRef}
                name="quantity"
                id="quantity"
                defaultValue={1}
                min={1}
                className="quantity-input"
            />

            <button
                className="addToCart"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </>
    );
}

export default AddToCart;