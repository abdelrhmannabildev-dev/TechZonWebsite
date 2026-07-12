const db = require("./database/db");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
const productRouter = require("./routes/product.routes");
const orderRouter = require("./routes/order.routes");
const categoryRouter = require("./routes/category.routes");
const authRouter = require("./routes/auth.routes");

app.use("/auth", authRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);
app.use("/order", orderRouter);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

