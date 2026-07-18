import { useRef } from "react";

function AddToCart({ productId }) {
    const quantityRef = useRef();

    const handleAddToCart = () => {
        const quantity = Number(quantityRef.current.value);

        if (quantity < 1) return;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(item => item.productId === productId);

        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ productId, quantity });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };

    return (
        <>
            <input
                ref={quantityRef}
                type="number"
                min="1"
                defaultValue="1"
            />

            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
        </>
    );
}

export default AddToCart;