const db= require("../database/db.js");


const getDashboardData= async (req, res) => {
    try {
    const [
    ordersResult,
    productsResult,
    recentOrdersResult,
    lowStockResult
    ] = await Promise.all([
        db.query("SELECT COUNT(*) AS count FROM orders"),
        db.query("SELECT COUNT(*) AS count FROM products"),
        db.query("SELECT * FROM orders ORDER BY created_at DESC LIMIT 5"),
        db.query("SELECT * FROM products WHERE quantity <= ?", [5])
    ]);

    const totalOrders = ordersResult[0][0].count;
    const totalProducts = productsResult[0][0].count;
    const statistics = {
    totalOrders,
    totalProducts
    };
    const recentOrders = recentOrdersResult[0];
    const lowStockProducts = lowStockResult[0];
    res.status(200).json({ statistics, recentOrders, lowStockProducts });
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
    }
}

module.exports={getDashboardData};