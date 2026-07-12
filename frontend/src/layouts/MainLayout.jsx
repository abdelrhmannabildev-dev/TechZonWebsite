import Navbar from "../components/base/Navbar.jsx"
import Footer from "../components/base/Footer.jsx"
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout