const db = require("../database/db.js");

const getAllCategories = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM categories");
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// admins
const addCategory = async (req, res) => {
    try {
        const { category_name } = req.body;
        const [isExist] = await db.query("SELECT * FROM categories WHERE name = ?", [category_name]);
        if (isExist.length > 0) {
            return res.status(400).json({ error: "Category already exists" });
        }
        const [rows] = await db.query("INSERT INTO categories (name) VALUES (?)", [category_name]);
        res.status(201).json({ message: "Category created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query("DELETE FROM categories WHERE id = ?", [id]);
        if (rows.affectedRows === 0) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { category_name } = req.body;
        const [rows] = await db.query("UPDATE categories SET name = ? WHERE id = ?", [category_name, id]);
        if (rows.affectedRows === 0) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json({ message: "Category updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = { getAllCategories, getProductByCategory ,addCategory,deleteCategory,updateCategory};