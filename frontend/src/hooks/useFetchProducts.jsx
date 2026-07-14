import { useState, useEffect } from "react";
import { getProducts } from "../api/user/productApi";
export default function useFetchProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        }).catch((error) => {
            setError(1);
            console.error(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);
    return [products, loading, error];
}