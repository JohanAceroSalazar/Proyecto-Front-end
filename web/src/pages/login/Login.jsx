import { useState } from "react";
import "./Login.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/Logo.png";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setMessage("Todos los campos son obligatorios");
            return;
        }
        // aquí conectas tu loginUser de authService
    };

    return (
        <div className="login-container">

            {/* LADO IZQUIERDO */}
            <div className="login-left">
                <img src={logo} alt="One Language" className="logo-img" />
                    <h2 className="brand-name">ONE<br/>LANGUAGE</h2>
            </div>

            {/* LADO DERECHO */}
            <div className="login-right">
                <form className="login-card" onSubmit={handleSubmit}>
                    <label>Correo electrónico</label>
                    <Input name="email" type="email" placeholder="andres@gmail.com" onChange={handleChange} />

                    <label>Contraseña</label>
                    <div className="password-field">
                        <Input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            onChange={handleChange}
                        />
                        <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <Button text="Iniciar sesión" />
                </form>

                <p className="recover-text">Restablecer contraseña</p>
                <p className="register-text">
                    ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
                </p>

                {message && <p className="message">{message}</p>}
            </div>

        </div>
    );
}

export default Login;