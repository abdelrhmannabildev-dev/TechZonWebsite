import { useEffect, useState } from "react";
import useFetchAdmin from "../../hooks/useFetchAdmin";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../components/admin/dashboard/dashboard/Dashboard";

function AdminPage() {
    const navigate = useNavigate();
    const { adminInfo, loading, error } = useFetchAdmin();
    if (loading) return <p>Loading...</p>;
    if (error){
        if (error.status === 401) navigate("/admin/login");
        return <p>Error: {error.message}</p>;
    }
    
    const username = adminInfo.username;
    return (
    <>
        <Dashboard username={username} />
    </>
    )
}

export default AdminPage