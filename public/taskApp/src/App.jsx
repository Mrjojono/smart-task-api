import { useState } from 'react'
import NavBar from './component/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Page from './Page';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Page' element={<Page/>} ></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
