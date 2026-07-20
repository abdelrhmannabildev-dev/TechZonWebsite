const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const productRouter = require("./routes/product.routes");
const orderRouter = require("./routes/order.routes");
const categoryRouter = require("./routes/category.routes");
const authRouter = require("./routes/auth.routes");
const dashboardRouter = require("./routes/dashboard.routes");

app.use("/auth", authRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);
app.use("/order", orderRouter);
app.use("/dashboard", dashboardRouter);

module.exports = app;