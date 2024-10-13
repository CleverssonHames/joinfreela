import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Registro from "./pages/Registro";
import { TipoCadProvider } from "./context/TipoCadContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <TipoCadProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </TipoCadProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
