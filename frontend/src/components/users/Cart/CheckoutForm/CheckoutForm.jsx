import { useState } from "react";
import "./CheckoutForm.css"
import {makeOrder} from "../../../../api/user/orderApi";

function CheckoutForm({setOpened}) {
    const [formData, setFormData] = useState({
    customer_name: "",
    phone: "",
    address: "",
    governorate: "",
    });
    const items= JSON.parse(localStorage.getItem("cart"));

    const handleChange = (e) => {
    setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
    }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = { ...formData, items };
        makeOrder(order).then(() => setOpened(false))
        .catch((err) => console.log(err));

    };
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("checkout-overlay")&& !e.target.classList.contains("checkout-form")) {
            setOpened(false);
        }
        
    };

    return (
    <div className="checkout-overlay" onClick={handleOverlayClick} >
    <form className="checkout-form" onSubmit={handleSubmit}>
        <h2 className="checkout-title">Checkout</h2>

        <div className="form-group">
        <label className="form-label">Full Name</label>
        <input
            className="form-input"
            type="text"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
        />
        </div>

        <div className="form-group">
        <label className="form-label">Phone Number</label>
        <input
            className="form-input"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="01xxxxxxxxx"
            required
        />
        </div>

        <div className="form-group">
        <label className="form-label">Address</label>
        <textarea
            className="form-input"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows={3}
            required
        />
        </div>

        <div className="form-group">
        <label className="form-label">Governorate</label>
        <select
            className="form-input"
            name="governorate"
            value={formData.governorate}
            onChange={handleChange}
            required
        >
            <option value="">Select Governorate</option>
            <option value="Cairo">Cairo</option>
            <option value="Giza">Giza</option>
            <option value="Alexandria">Alexandria</option>
            <option value="Dakahlia">Dakahlia</option>
            <option value="Sharqia">Sharqia</option>
            <option value="Monufia">Monufia</option>
            <option value="Qalyubia">Qalyubia</option>
            <option value="Gharbia">Gharbia</option>
            <option value="Beheira">Beheira</option>
            <option value="Kafr El Sheikh">Kafr El Sheikh</option>
            <option value="Fayoum">Fayoum</option>
            <option value="Beni Suef">Beni Suef</option>
            <option value="Minya">Minya</option>
            <option value="Assiut">Assiut</option>
            <option value="Sohag">Sohag</option>
            <option value="Qena">Qena</option>
            <option value="Luxor">Luxor</option>
            <option value="Aswan">Aswan</option>
        </select>
        </div>

        <div className="checkout-actions">
        <button className="cancel-btn" type="button" onClick={() => setOpened(false)}>
            Cancel
        </button>

        <button className="submit-btn" type="submit">
            Place Order
        </button>
        </div>
    </form>
    </div>
    );
}

export default CheckoutForm;