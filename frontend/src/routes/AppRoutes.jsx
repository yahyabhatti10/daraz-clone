import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import CategoryProducts from '../pages/CategoryProducts'
import ScrollToTop from '../utils/scrollToTop'
import SaleProducts from '../pages/SaleProducts'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import ProtectedRoute from './ProtectedRoutes'

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/products/:categoryKey" element={<CategoryProducts />} />
          <Route path="/sale-products" element={<SaleProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
export default AppRoutes
