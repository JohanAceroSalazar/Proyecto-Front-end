import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/login/Login";

function AppRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    );
}

export default AppRoutes;