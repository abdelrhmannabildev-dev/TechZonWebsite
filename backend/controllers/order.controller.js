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
        const ordersToUpdate=req.body;
        for (const order of ordersToUpdate) {
            const {orderId,status}=order;
            if(status!=="pending" && status!=="delivered" && status!=="declined"){
                return res.status(400).json({ error: "Invalid status" });
            }
            const [rows]=await db.query("UPDATE orders SET status = ? WHERE id = ?",[status,orderId]);            
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
const getOrdersDetailsById = async (req, res) => {
    try {
        const { orderId } = req.params;
        const [rows] = await db.query(
            `
                SELECT 
                    orders.*,
                    order_items.product_id,
                    order_items.quantity,
                    products.name AS productName,
                    products.price AS productPrice,
                    
                    (order_items.quantity * products.price) as total_price
                FROM orders
                JOIN order_items
                ON orders.id = order_items.order_id
                JOIN products
                ON order_items.product_id = products.id
                WHERE orders.id =  ?
            `
            , [orderId]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "Order not found" });
        }
        const order = {
            id: rows[0].id,
            customer_name: rows[0].customer_name,
            phone: rows[0].phone,
            address: rows[0].address,
            governorate: rows[0].governorate,
            status: rows[0].status,
            created_at: rows[0].created_at,
            items: [],
            total: 0
        };

        rows.forEach(row => {
            order.items.push({
                product_id: row.product_id,
                name: row.productName,
                price: row.productPrice,
                quantity: row.quantity,
                subtotal: row.total_price
            });

            order.total += row.total_price;
        });

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {makeOrder,getAllOrders ,changeOrderStatus ,getOrdersDetailsById};