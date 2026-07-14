import { useState, useEffect } from "react"
import "./Products.css"
import ProductGrid from "../../../components/users/products/ProductGrid/ProductGrid"
import useFetchProducts from "../../../hooks/useFetchProducts"
import ProductFilters from "../../../components/users/products/ProductFilters/ProductFilters"
import filterProducts from "../../../utils/filter"

function Products() {
    const [products, loading, error] = useFetchProducts();
    const maxPrice =
        products.length > 0
            ? Math.max(...products.map(p => p.price))
            : Infinity;
    const [filters, setFilters] = useState({
        search: "",
        category: "",
        maxPrice: maxPrice,
        minPrice:0,
        availability:true
    });
        
    useEffect(() => {
        setFilters({...filters, maxPrice:maxPrice})
    },[products])

    const filteredProducts=filterProducts(products,filters)
    const state = loading ? "loading" : error ? "error" : products.length > 0 ? "success" : "empty";
    return (
        <>
            <ProductFilters className="filter" filters={filters} setFilters={setFilters} maxPrice={maxPrice} />
            <ProductGrid state={state} products={filteredProducts} />
        </>
    )
}

export default Products