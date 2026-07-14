import {getDashboardData} from "../../../../api/admin/dashboardApi";
import { useState, useEffect } from "react";
import RecentOrders from "../recentOrders/RecentOrders";
import LowStockProducts from "../lowStockProducts/LowStockProducts";
import "./Dashboard.css";
function Dashboard() {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getDashboardData().then((data) => {
            setDashboardData(data);
            console.log(data);
        }).catch((error) => {
            setError(error);
            console.error(error);
        }).finally(() => {
            setLoading(false);
        })
    },[])
    if (loading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error: {error}</div>;
      }
  return (
    <>
        <div className="dashboard-container">
            <div className="dashboard-statistics">
                <div className="dashboard-card">
                    <h2>Total Orders</h2>
                    <p>{dashboardData?.statistics.totalOrders}</p>
                </div>
                <div className="dashboard-card">
                    <h2>Products</h2>
                    <p>{dashboardData?.statistics.totalProducts}</p>
                </div>
            </div>
            <div className="dashboard-recent-orders">
                <h2>Recent Orders</h2>
                <RecentOrders orders={dashboardData?.recentOrders} />
            </div>
            <div className="dashboard-low-stock-products">
                <h2>Low Stock Products</h2>
                <LowStockProducts products={dashboardData?.lowStockProducts} />
            </div>
        </div>
    </>
  )
}

export default Dashboard