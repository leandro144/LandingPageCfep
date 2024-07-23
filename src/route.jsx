import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"

const RouteConfig = () => {
  return (
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
  </BrowserRouter>
  )
}

export default RouteConfig