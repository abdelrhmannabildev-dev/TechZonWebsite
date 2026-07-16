import { deleteProduct } from "../../../../api/admin/productApi";
function ProductList(props) {

    const { setSelectedProduct, selectedProduct, mode, setMode, products, fetchProducts } = props

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setMode("edit");
    };

    const handleDelete = async (id) => {
        await deleteProduct(id);
        fetchProducts();
    };

  return (
    <div className="product-list">
        <div className="product-list-header">
            <h2>Products</h2>
            <p>Quickly inspect and update the current product inventory.</p>
        </div>
        <div className="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>#{product.id}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.categoryName}</td>
                            <td className="table-actions">
                                <button className="edit-btn" onClick={() => handleEdit(product)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductList