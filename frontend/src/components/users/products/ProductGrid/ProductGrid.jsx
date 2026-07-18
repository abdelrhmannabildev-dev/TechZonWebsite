import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import EmptyState from "../States/EmptyState/EmptyState"
import ErrorState from "../States/ErrorState/ErrorState"
import LoadingState from "../States/LoadingState/LoadingState"
function ProductGrid(props) {
    const state = props.state
    switch (state) {
        case "loading":
            return (
                <div className="product-grid">
                    <LoadingState />
                </div>
            )
        case "error":
            return (
                <ErrorState />
            )
        case "empty":
            return (
                <EmptyState />
            )
    }
    const products = props.products

    return (
        <div className="product-grid" >
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductGrid;