const db = require("../database/db.js");

const makeOrder=async (req, res) => {
    try {
        const {customer_name,phone,address,governorate,items}=req.body;
        const [order]=await db.query("INSERT INTO orders(customer_name,phone,address,governorate) VALUES(?,?,?,?)",[customer_name,phone,address,governorate]);
        const order_id=order.insertId;
        for (const item of items) {
            await db.query("INSERT INTO order_items(order_id,product_id,quantity) VALUES(?,?,?)",[order_id,item.product_id,item.quantity]);
        }
        res.status(201).json({ message: "Order created successfully" });
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getAllOrders=async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM orders");
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = {makeOrder,getAllOrders}