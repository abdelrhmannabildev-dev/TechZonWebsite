import { getProducts } from "../api/productApi"
import { useState, useEffect } from "react"
import ProductGrid from "../components/products/ProductGrid/ProductGrid"
import EmptyState from "../components/products/EmptyState/EmptyState"
import ErrorState from "../components/products/ErrorState/ErrorState"
function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        getProducts().then((data) => {
            console.log(data)
            setProducts(data);
        }).catch((error) => {
            setError(1);
            console.error(error);
        });
        },[]);

    if (error) {
        return (
            <>
                <ErrorState />
            </>
        )
    }
    if (products.length === 0) {
        return (
            <>
                <EmptyState />
            </>
        )
    }
    return (
        <>
            <ProductGrid products={products} />
        </>
    )
}

export default Products