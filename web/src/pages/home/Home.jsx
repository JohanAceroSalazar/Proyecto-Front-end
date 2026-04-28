import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaHome, FaCamera, FaHistory, FaUniversalAccess, FaUser } from "react-icons/fa";

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const navigate = useNavigate();
    const userName = "usuario";

    const toggleMenu = () => {
        if (menuOpen) {
            setClosing(true);
            setTimeout(() => {
                setClosing(false);
                setMenuOpen(false);
            }, 250);
        } else {
            setMenuOpen(true);
        }
    };

    const handleNavigate = (path) => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            setMenuOpen(false);
            navigate(path);
        }, 250);
    };

    return (
        <div className="home-container">

            {/* HEADER */}
            <div className="home-header">
                <div className="home-logo">
                    <span>ONE<br/>LANGUAGE</span>
                </div>

                <div className="home-header-right">
                    <div className="menu-wrapper">
                        <button className="menu-btn" onClick={toggleMenu}>
                            Menú <span className={`menu-arrow ${menuOpen ? "open" : ""}`}>▼</span>
                        </button>

                        {menuOpen && (
                            <div className={`menu-dropdown ${closing ? "closing" : ""}`}>
                                <p onClick={() => handleNavigate("/home")}>
                                    Home <FaHome />
                                </p>
                                <p onClick={() => handleNavigate("/traducir")}>
                                    Traducir <FaCamera />
                                </p>
                                <p onClick={() => handleNavigate("/historial")}>
                                    Historial <FaHistory />
                                </p>
                                <p onClick={() => handleNavigate("/accesibilidad")}>
                                    Accesibilidad <FaUniversalAccess />
                                </p>
                                <p onClick={() => handleNavigate("/perfil")}>
                                    Perfil <FaUser />
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* SALUDO */}
            <p className="home-greeting">Hola {userName} bienvenido</p>

            {/* TARJETA */}
            <div className="home-card">
                <h1>¡Bienvenido a One Language!</h1>
                <p>
                    One Language es una aplicación diseñada para traducir el lenguaje
                    de señas colombiano a texto y audio en tiempo real, promoviendo
                    la inclusión y la comunicación sin barreras en Colombia.
                </p>
                <button className="home-btn" onClick={() => navigate("/traducir")}>
                    Comenzar a traducir
                </button>
            </div>

        </div>
    );
}

export default Home;