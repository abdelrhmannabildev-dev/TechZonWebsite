
export default function filterProducts(products,filters){
    return products.filter((product) => {
        return (
            product.price <= filters.maxPrice &&
            product.price >= filters.minPrice &&
            (filters.search === "" ||
                product.name.toLowerCase().includes(filters.search.toLowerCase())) &&
            (filters.category === "" ||
                product.categoryName === filters.category)
        );
    });

}
