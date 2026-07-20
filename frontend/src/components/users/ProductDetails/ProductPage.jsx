import { useParams } from "react-router-dom"
import { getProductById } from "../../../api/user/productApi";
import { useEffect, useState } from "react";
import ProductHero from "./ProductHero/ProductHero";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import ProductDetails from "./ProductDetails/ProductDetails";
function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        getProductById(id).then((data) => {setProduct(data)
        })
        .catch((error) => console.error(error));
    },[id]);
    return (
    <>
        <Breadcrumbs />
        <ProductHero product={product} />
        <ProductDetails product={product}/>
    </>
  )
}

export default ProductPage