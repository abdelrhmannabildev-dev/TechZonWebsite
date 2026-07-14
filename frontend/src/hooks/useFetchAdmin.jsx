import { useEffect, useState } from "react";
import { adminGetInfo } from "../api/admin/adminAuthApi";

const useAdminInfo = () => {
    const [adminInfo, setAdminInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const data = await adminGetInfo();
                setAdminInfo(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAdmin();
    }, []);

    return { adminInfo, loading, error };
};

export default useAdminInfo;