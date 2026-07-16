import Switcher from "./Switcher/Switcher"
function OrdersTable({orders , setStatusToChange ,statusToChange ,setOrderIdToShow}) {

  return (
    <div className="orders-table">
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>Governorate</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {orders.map((order) => (
                    <tr key={order.id}>
                        <td data-label="Order ID">#{order.id}</td>
                        <td data-label="Customer">{order.customer_name}</td>
                        <td data-label="Phone">{order.phone}</td>
                        <td data-label="Governorate">{order.governorate}</td>
                        <td data-label="Status"><Switcher setStatusToChange={setStatusToChange} order={order} statusToChange={statusToChange} /></td>
                        <td data-label="Actions"><button className="show-btn" onClick={() => setOrderIdToShow(order.id)}>Show</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default OrdersTable