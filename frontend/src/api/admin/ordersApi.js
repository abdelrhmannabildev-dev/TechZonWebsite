import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getAllOrders = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/order` , 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    return response.data;
};
export const changeOrderStatus = async (ordersToUpdate) => {
    const token = localStorage.getItem("token");
    const response = await axios.patch(`${API_URL}/order/status` , ordersToUpdate , 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    return response;
}

export const getOrdersDetailsById = async (orderId) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/order/${orderId}` , 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    return response.data;
}