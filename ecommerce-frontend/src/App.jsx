import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/ChechoutPage'
import { OrdersPage } from './pages/OrdersPage'
import {Routes, Route} from "react-router"
import './App.css'
import { TrackingPage } from './pages/TrackingPage'

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckoutPage />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage/> } />
    </Routes>
  )
}

export default App
