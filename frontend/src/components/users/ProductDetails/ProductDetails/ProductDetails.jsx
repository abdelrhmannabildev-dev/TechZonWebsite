import "./productDetails.css";

function ProductDetails({ product }) {
    const { description, created_at, categoryName } = product;

    return (
        <div className="product-details">
            <h3>Product Details</h3>

            <div className="detail-item">
                <span>Description</span>
                <p>{description || "No description available."}</p>
            </div>

            <div className="detail-item">
                <span>Category</span>
                <p>{categoryName}</p>
            </div>

            <div className="detail-item">
                <span>Added On</span>
                <p>{new Date(created_at).toLocaleDateString()}</p>
            </div>
        </div>
    );
}

export default ProductDetails;