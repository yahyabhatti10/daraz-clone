import AppRoutes from "./routes/AppRoutes"
import { ProductProvider } from "./context/ProductProvider";

function App() {
  return (
    <>
      <ProductProvider>
        <AppRoutes/>
      </ProductProvider>
    </>
  )
}

export default App
