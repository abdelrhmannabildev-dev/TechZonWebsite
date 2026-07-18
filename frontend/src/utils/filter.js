
export default function filterProducts(products,filters){
    console.log(filters)
    return products.filter((product) => {
        return (
            product.price <= filters.maxPrice &&
            product.price >= filters.minPrice &&
            (filters.search === "" ||
                product.name.toLowerCase().includes(filters.search.toLowerCase())) &&
            (filters.category === "" ||
                product.categoryName.toLowerCase() === filters.category.toLowerCase())
        );
    });

}
