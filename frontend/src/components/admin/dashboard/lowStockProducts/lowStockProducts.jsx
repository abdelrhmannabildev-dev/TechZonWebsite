import "./lowStockProducts.css";

function LowStockProducts({ products }) {
    if (!products || products.length === 0) {
        return (
            <p className="empty-message">
                No low stock products.
            </p>
        );
    }

    return (
        <div className="low-stock-table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>#{product.id}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>
                                <span
                                    className={`stock ${
                                        product.quantity === 0 ? "danger" : "warning"
                                    }`}
                                >
                                    {product.quantity}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LowStockProducts;