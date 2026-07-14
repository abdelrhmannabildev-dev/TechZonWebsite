import { useState, useEffect } from "react";
import { getCategories } from "../api/user/categoryApi";
export default function useFetchProducts() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
        }).catch((error) => {
            setError(1);
            console.error(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);
    return {categories, loading, error};
}