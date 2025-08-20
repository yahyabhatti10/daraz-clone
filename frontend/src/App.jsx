import AppRoutes from './routes/AppRoutes'
import { ProductProvider } from './context/ProductProvider'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </>
  )
}

export default App
