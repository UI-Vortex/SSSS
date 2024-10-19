import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='Register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
