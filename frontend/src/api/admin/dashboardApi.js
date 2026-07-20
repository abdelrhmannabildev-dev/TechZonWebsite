import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getDashboardData = async () => {
    // console.log(API_URL);
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/dashboard`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};