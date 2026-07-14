import axios from "axios";

export const adminLogin = async (username, password) => {
    const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
    });
    return response.data;
};
export const adminGetInfo = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3000/auth/me", {
        headers: {
            Authorization: `Bearer ${token}`},
        },
    );
    return response.data;
}
