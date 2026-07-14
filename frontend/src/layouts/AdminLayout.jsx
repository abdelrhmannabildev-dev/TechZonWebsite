import AdminNavbar from "../components/admin/layoutComponents/adminNavbar/AdminNavbar"
import AdminFooter from "../components/admin/layoutComponents/adminFooter/AdminFooter"
import { Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <>
            <AdminNavbar />
            <main>
                <Outlet />
            </main>
            <AdminFooter />
        </>
    )
}

export default AdminLayout