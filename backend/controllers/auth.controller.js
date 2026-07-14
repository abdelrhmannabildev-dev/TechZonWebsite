const db = require ("../database/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const adminLogin= async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(400).json({ error: "All fields are required" });
    }
    try{
        const [rows] = await db.query("SELECT * FROM admins WHERE username = ?", [username]);
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
const adminRegister= async (req,res)=>{
    const { username, password } = req.body;
    if(!username || !password){ق
        return res.status(400).json({ error: "All fields are required" });
    }
    try{
        const [rows] = await db.query("SELECT * FROM admins WHERE username = ?", [username]);
        if(rows.length > 0){
            return res.status(400).json({ error: "Username already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query("INSERT INTO admins (username, password) VALUES (?, ?)", [username, hashedPassword]);
        res.json({ message: "Admin registered successfully" });
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
const getCurrentAdmin=async(req,res)=>{
    const adminId = req.user.adminId;
    try{
        const [rows] = await db.query("SELECT username FROM admins WHERE id = ?", [adminId]);
        if(rows.length === 0){
            return res.status(404).json({ error: "Admin not found" });
        }
        res.json(rows[0]);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {adminLogin,adminRegister,getCurrentAdmin};