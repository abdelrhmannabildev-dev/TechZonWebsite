import { getAllOrders, changeOrderStatus  } from "../../../api/admin/ordersApi"
import { useEffect ,useState } from "react"

import OrderDetails from "./OrderDetails/OrderDetails"
import OrdersTable from "./OrdersTable/OrdersTable"
import Message from "./Message/Message"
import "./AdminOrders.css"

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [statusToChange , setStatusToChange] = useState([]);
    const [success, setSuccess] = useState(null);
    const [orderIdToShow , setOrderIdToShow] = useState(null);
    useEffect(() => {
        getAllOrders().then((data) => {
          setOrders(data);
        }).catch((error) => {
          console.error(error);
        });
      }, []);

    const saveChanges = async () => {
      try {
        const response = await changeOrderStatus(statusToChange);

        if (response.status === 200) {
          setSuccess("success");
        }
      } catch (error) {
        console.error(error);
        setSuccess("error");
      } finally {
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      }
    };

    return (
      <div className="admin-orders">
        <div className="orders-header">
          <div>
            <h1>Orders management</h1>
            <p>Track order statuses, review details, and apply updates in one place.</p>
          </div>

          <button className="save-btn" onClick={saveChanges}>Save changes</button>
        </div>

        <div className="orders-grid">
          <section className="orders-panel">
            <h2>Active orders</h2>
            <OrdersTable
              orders={orders}
              setStatusToChange={setStatusToChange}
              statusToChange={statusToChange}
              setOrderIdToShow={setOrderIdToShow}
            />
          </section>

          <section className="order-details-panel">
            <h2>Order preview</h2>
            {orderIdToShow ? (
              <div className="order-details-card">
                <OrderDetails orderId={orderIdToShow} />
              </div>
            ) : (
              <div className="empty-state">
                Select an order to view details and status history.
              </div>
            )}
          </section>
        </div>

        <Message message={success} />
      </div>
    )
}

export default AdminOrders