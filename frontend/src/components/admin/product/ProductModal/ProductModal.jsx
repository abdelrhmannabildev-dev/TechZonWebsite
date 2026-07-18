import { useEffect, useState } from "react"
import "./ProductModal.css"
import { getCategories } from "../../../../api/user/categoryApi";
import { addProduct, updateProduct } from "../../../../api/admin/productApi";
function ProductModal(props) {
    const {setMode, mode, selectedProduct ,setSelectedProduct ,fetchProducts ,categories} = props
    const [formData, setFormData] = useState({
        name: "",
        price: 0,
        quantity: "",
        category: "",
        image_url: ""
    });

        
    
    useEffect(() => {
        if (selectedProduct) {
            setFormData({
                name: selectedProduct.name,
                price: selectedProduct.price,
                quantity: selectedProduct.quantity,
                category: selectedProduct.categoryName,
                image_url: selectedProduct.image_url || ""
            });
        } else {
            setFormData({
                name: "",
                price: "",
                quantity: "",
                category: "",
                image_url: ""
            });
        }
    }, [selectedProduct]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const categoryObj = categories.find((category) => category.name === formData.category);
        const productToSend = {
            name: formData.name,
            price: formData.price,
            quantity: formData.quantity,
            category_id: categoryObj ? categoryObj.id : null,
            image_url: formData.image_url
        };

        try {
            if (mode === "add") {
                await addProduct(productToSend);
            } else if (mode === "edit" && selectedProduct) {
                await updateProduct(selectedProduct.id, productToSend);
            }
        } catch (err) {
            console.error(err);
        }

        setSelectedProduct(null);
        setMode(null);
        setFormData({ name: "", price: "", quantity: "", category: "", image_url: "" });
        fetchProducts();
    }
    const handleCancel = () => {
        setSelectedProduct(null);
        setMode(null);
        setFormData({ name: "", price: "", quantity: "", category: "", image_url: "" });
    };

  return (
            <div className="modal-overlay">
            <div className="modal">
                <h2>{mode === "add" ? "Add Product" : "Edit Product"}</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value
                                })
                            }
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            value={formData.price}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    price: e.target.value
                                })
                            }
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            name="category"
                            id="category"
                            value={formData.category}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    category: e.target.value
                                })
                            }
                            required
                        >
                            <option value="">Select Category</option>

                            {categories.map(category => (
                                <option
                                    key={category.id}
                                    value={category.name}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            value={formData.quantity}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    quantity: e.target.value
                                })
                            }
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="image_url">Image URL</label>
                        <input
                            type="text"
                            id="image_url"
                            placeholder="https://..."
                            value={formData.image_url}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    image_url: e.target.value
                                })
                            }
                        />
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="submit-btn">{mode === "add" ? "Add product" : "Save changes"}</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ProductModal