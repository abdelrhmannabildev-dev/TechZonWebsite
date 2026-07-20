import "./productHero.css"
import AddToCart from "../addToCart/AddToCart"
function ProductHero({product}) {
    const {name,old_price,price,quantity,image} = product
    const discount =
    old_price && old_price > price
        ? Math.round(((old_price - price) / old_price) * 100)
        : null;
  return (
    <div className="product-hero">
        <h2 className="product-name">{name}</h2>
        <img className="product-image" src={image} alt={name} />
        <div className="bottom-group">
        <div className="product-prices">
            {old_price && old_price > price && (
                <>
                    <span className="old-price">${old_price}</span>
                    <span className="discount">-{discount}%</span>
                </>
            )}
            <span className="product-price">${price}</span>
        </div>
        <p className="product-quantity">
            {quantity} in stock
        </p>
        <AddToCart product={product} />
        </div>
        </div>
  )
}


export default ProductHero