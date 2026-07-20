import "./recentOrders.css";

function RecentOrders({ orders }) {
    if (!orders || orders.length === 0) {
        return (
            <p className="empty-message">
                No recent orders found.
            </p>
        );
    }

    return (
        <div className="recent-orders-table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Governorate</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>#{order.id}</td>
                            <td>{order.customer_name}</td>
                            <td>{order.phone}</td>
                            <td>{order.governorate}</td>
                            <td>
                                <span className={`status ${order.status}`}>
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentOrders;