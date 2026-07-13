import Navbar from "../components/shared/navbar/Navbar.jsx"
import Footer from "../components/shared/footer/Footer.jsx"
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