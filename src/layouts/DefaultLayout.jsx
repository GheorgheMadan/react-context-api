import { Outlet } from "react-router-dom"
// importo l'header e il footer 
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function DefaultLayout() {
    console.log("✅ DefaultLayout caricato!");
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}