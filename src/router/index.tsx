import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Subscriptions from '../pages/Subscriptions'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </BrowserRouter>
  )
}
