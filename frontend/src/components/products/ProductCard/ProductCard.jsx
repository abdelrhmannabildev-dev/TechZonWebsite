import "./ProductCard.css"
function ProductCard(props) {
    const product = props.product
    const {name,image,price,quantity} = product
return (
    <div className="product-card">
        <h2 className="product-name">{name}</h2>
        <img className="product-image" src={image} alt={name} />
        <div className="bottom-group">
            <p className="product-price">Price: {price}</p>
            <p className="product-quantity">Quantity: {quantity}</p>
        </div>
    </div>
)
}

export default ProductCard