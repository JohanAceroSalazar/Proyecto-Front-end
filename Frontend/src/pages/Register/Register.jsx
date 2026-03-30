import { useState } from "react";
import "./Register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { registerUser } from "../../services/authService";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /\S+@\S+\.\S+/;

        if (!form.name || !form.email || !form.password) {
            setMessage("Todos los campos son obligatorios");
            return;
        }

        if (!emailRegex.test(form.email)) {
            setMessage("Correo inválido");
            return;
        }

        try {
            await registerUser(form);
            setMessage("Registro exitoso");
        } catch (error) {
            setMessage(error.message || "Error en el registro");
        }
    };

    return (
        <div className="register-container">
            <div className="logo">ONE LANGUAGE</div>

            <h1>Crea tu cuenta</h1>

            <form className="form-card" onSubmit={handleSubmit}>
                <label>Nombre completo</label>
                <Input name="name" placeholder="Nombre" onChange={handleChange} />

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
                    <span 
                        className="toggle-password" 
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </span>
                </div>

                <Button text="Registrarse" />
            </form>

            <p className="login-text">Ya tienes una cuenta? Inicia sesión</p>
            <p className="terms">Acepto los términos y condiciones</p>

            <p className="message">{message}</p>
        </div>
    );
}

export default Register;