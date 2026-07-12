const jwt= require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const headers = req.headers.authorization;
    if (!headers) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const [scheme, token] = headers.split(" ");
    if(scheme !== "Bearer"){
        return res.status(401).json({ error: "Unauthorized" });
    }
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = authMiddleware;