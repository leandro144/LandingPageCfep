import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partner from "./pages/Partner";

const RouteConfig = () => {
  return (
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About/>} />
            <Route path="/faleconosco" element={<Contact/>} />
            <Route path="/parcerias" element={<Partner/>} />
        </Routes>
  </BrowserRouter>
  )
}

export default RouteConfig