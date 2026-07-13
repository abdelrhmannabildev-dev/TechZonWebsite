import useFetchCategories from "../../../hooks/useFetchCategories"
import "./ProductFilters.css"

function ProductFilters(props) {
    const {filters,setFilters}=props
    const {categories, loading, error}=useFetchCategories()
    const options=[]
    categories.map((category) => {
                <option key={category.id} value={category.name}>{category.name}</option>
        })
return (
    <div className="product-filters">
        <div className="product-search">
            <input type="text" placeholder="Search..."  onChange={(e) => setFilters({...filters, search:e.target.value})} /> 
        </div>
        <div className="product-category">
            <select name="category" onChange={(e) => setFilters({...filters, category:e.target.value})} > 
                <option value="">All</option>
                {categories.map((category) => 
                <option key={category.id} value={category.name}>{category.name}</option>
                )}
            </select>
        </div>
        <div className="product-price-range">
        <input
            type="range"
            min="0"
            max={props.maxPrice}
            step="20"
            value={filters.maxPrice}
            onChange={(e) =>
                setFilters(prev => ({
                    ...prev,
                    maxPrice: Number(e.target.value)
                }))
            }
        />

        <p>Max Price: ${filters.maxPrice}</p></div>
    </div>
)}


export default ProductFilters