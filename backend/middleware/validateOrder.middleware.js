const validateOrder = (req, res, next) => {
    const { customer_name, phone, address, governorate, items } = req.body;
    if (
        !customer_name?.trim() ||
        !phone?.trim() ||
        !address?.trim() ||
        !governorate?.trim()
    ) {
        return res.status(400).json({
            error: "All fields are required"
        });
    }
    if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
        error: "Cart is empty"
    });
    }
    for (const item of items) {
    if (!item.productId || !item.quantity) {
        return res.status(400).json({
            error: "Invalid cart item"
        });
    }
    }
    next();
};

module.exports = {validateOrder};