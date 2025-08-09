import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";


function AppRoutes()
{
    return(
        <>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
}
export default AppRoutes;