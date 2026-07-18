import { useEffect, useState } from "react";
import { getOrdersDetailsById } from "../../../../api/admin/ordersApi";

function OrderDetails({ orderId }) {
    const [order, setOrder] = useState(null);
    
    useEffect(() => {
        getOrdersDetailsById(orderId)
            .then((data) => {
                setOrder(data);
            })
            .catch(console.error);
    }, [orderId]);

    if (!order) return <p>Loading...</p>;

    return (
        <div>
            <h2>Order #{order.id}</h2>

            <p>{order.customer_name}</p>
            <p>{order.phone}</p>
            <p>{order.address}</p>
            <p>{order.governorate}</p>
            <p>{order.status}</p>

            <hr />

            {order.items.map((item) => (
                <div key={item.product_id}>
                    <h4>{item.name}</h4>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Subtotal: {item.subtotal}</p>
                </div>
            ))}

            <h3>Total: {order.total} EGP</h3>
        </div>
    );
}

export default OrderDetails;