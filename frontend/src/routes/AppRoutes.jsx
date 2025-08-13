import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import CategoryProducts from "../pages/CategoryProducts";
import ScrollToTop from "../utils/scrollToTop";''
import SaleProducts from "../pages/SaleProducts";


function AppRoutes()
{

    return(
        <>
        <BrowserRouter>
        <ScrollToTop/>
        <Header/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/products/:categoryKey" element={<CategoryProducts/>} />
                <Route path="/sale-products" element={<SaleProducts/>} />
            </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
}
export default AppRoutes;