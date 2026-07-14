import adminLogin from "../api/adminAuthApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useAdminAuth = async () => {
    const navigate = useNavigate();
    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const response = await adminLogin();
                if (response.status === 200) {
                    navigate("/admin");
                }
            } catch (error) {
                console.log(error);
            }
        };
        checkAdmin();
    }, []);
    return null;
};

export default useAdminAuth;