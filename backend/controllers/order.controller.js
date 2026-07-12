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

//admin only
const getAllOrders=async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM orders");
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const changeOrderStatus=async(req,res)=>{
    try {
        const {ordersToUpdate}=req.body;
        for (const order of ordersToUpdate) {
            const {id,status}=order;
            if(status!=="pending" && status!=="delivered" && status!=="declined"){
                return res.status(400).json({ error: "Invalid status" });
            }
            const [rows]=await db.query("UPDATE orders SET status = ? WHERE id = ?",[status,id]);            
            if(rows.affectedRows===0){
                return res.status(404).json({ error: "Order not found" });
            }
        }
        res.json({ message: "Order status updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = {makeOrder,getAllOrders ,changeOrderStatus};