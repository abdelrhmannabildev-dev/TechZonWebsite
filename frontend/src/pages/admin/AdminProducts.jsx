import ProductList from "../../components/admin/product/ProductList/ProductList"
import AddProduct from "../../components/admin/product/AddProduct/AddProduct"
import ProductModal from "../../components/admin/product/ProductModal/ProductModal"
import useFetchProducts from "../../hooks/useFetchProducts"
import "./AdminProducts.css"
import { getCategories } from "../../api/user/categoryApi"
import { useEffect, useState } from "react"


function AdminProducts() {
  const [mode, setMode] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, loading, error , fetchProducts] = useFetchProducts();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      getCategories().then((data) => {
          setCategories(data);
      }).catch((error) => {
      })
  }, []);
  
  if (loading) return <div className="page-loading">Loading...</div>;
  if (error) return <div className="page-error">Error: {error}</div>;

  return (
    <div className="admin-products">
      <div className="admin-products-header">
        <div>
          <span className="section-label">Manage inventory</span>
          <h1>Product catalog</h1>
          <p className="section-description">Add new items, update stock quickly, and keep your product listings up to date.</p>
        </div>
        <AddProduct setMode={setMode} />
      </div>

      <ProductList
        products={products}
        fetchProducts={fetchProducts}
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
        mode={mode}
        setMode={setMode}
      />

      {mode && (
        <ProductModal
          categories={categories}
          fetchProducts={fetchProducts}
          setMode={setMode}
          mode={mode}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  )
}

export default AdminProducts