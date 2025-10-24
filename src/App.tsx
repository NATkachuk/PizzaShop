import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout/Layout'

function App() {

  return (
    <>
      <BrowserRouter basename='/PizzaShop/'>
        <Routes >
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
