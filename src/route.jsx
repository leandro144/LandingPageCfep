import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";

const RouteConfig = () => {
  return (
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About/>} />
            <Route path="/faleconosco" element={<Contact/>} />
        </Routes>
  </BrowserRouter>
  )
}

export default RouteConfig