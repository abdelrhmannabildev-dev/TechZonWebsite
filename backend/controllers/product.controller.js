const db = require("../database/db.js");

//admins and users
const getAllProducts = async (req, res) => {
    try {
        const {category_id} = req.query;

        let query = "SELECT * FROM products";
        let params = [];

        if (category_id) {
            query += " WHERE category_id = ?";
            params.push(category_id);
        }

        const [rows] = await db.query(query, params);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// admins only
const addProduct = async (req, res) => {
    const { name, description, price, category_id , quantity } = req.body;
    if (!name || !price || !category_id ) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const [rows] = await db.query("INSERT INTO products (name, description, price, category_id , quantity) VALUES (?, ?, ?, ?,?)", [name, description, price, category_id , quantity||0]);
        res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const editProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category_id , quantity } = req.body;
    try {
        await db.query("UPDATE products SET name = ?, description = ?, price = ?, category_id = ?, quantity = ? WHERE id = ?", [name, description, price, category_id , quantity, id]);
        res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    
}}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query("DELETE FROM products WHERE id = ?", [id]);
        if (rows.affectedRows === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = { getAllProducts, getProductById , addProduct , editProduct , deleteProduct };