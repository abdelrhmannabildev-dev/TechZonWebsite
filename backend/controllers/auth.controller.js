const db = require ("../database/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const adminLogin= async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(400).json({ error: "All fields are required" });
    }
    try{
        const [rows] = await db.query("SELECT * FROM admin WHERE username = ?", [username]);
        if(rows.length === 0){
            return res.status(401).json({ error: "Invalid username or password" });
        }
        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).json({ error: "Invalid username or password" });
        }
        const token = jwt.sign({ adminId: user.id ,role:"admin"}, process.env.JWT_SECRET, { expiresIn: "12h" });
        res.json({ "token": token ,
            "message": "Login successful"
        });
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {adminLogin};