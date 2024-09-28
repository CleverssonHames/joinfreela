import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar';
import Registro from './pages/Registro';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/registro' element={<Registro />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
