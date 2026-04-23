import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/login/Login";
import Terms from "../pages/terms/terms";

function AppRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
    </BrowserRouter>
    );
}

export default AppRoutes;