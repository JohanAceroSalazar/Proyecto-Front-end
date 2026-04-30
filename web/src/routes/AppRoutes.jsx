import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/login/Login";
import Terms from "../pages/terms/terms";
import Home from "../pages/home/Home";
import RecoverPassword from "../pages/RecoverPassword/RecoverPassword";

function AppRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recoverpassword" element={<RecoverPassword />} />
        </Routes>
    </BrowserRouter>
    );
}

export default AppRoutes;