import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import CategoryProducts from "../pages/CategoryProducts";
import ScrollToTop from "../utils/scrollToTop";''


function AppRoutes()
{

    return(
        <>
        <BrowserRouter>
        <ScrollToTop/>
        <Header/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/category/:categoryKey" element={<CategoryProducts/>} />
            </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
}
export default AppRoutes;