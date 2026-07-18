import CheckoutForm from "./CheckoutForm/CheckoutForm"
import { useState } from "react"
function CheckOut() {
    const [opened , setOpened] = useState(false)

  return (
    <>
        <button onClick={() => setOpened(!opened)} className="checkout-btn">Checkout</button>
        {    opened &&
            <CheckoutForm setOpened={setOpened}/>}
    </>

  )
}

export default CheckOut