import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';  // IMPORTACIÓN CORRECTA (con la primera letra en mayúscula)

export default function PanelMenu() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const token = localStorage.getItem("token");

    useEffect(() => {
       console.log("Token:", token);
        if (!token) {
            navigate('/'); // Redirigir a la página de inicio si no hay token
            return;
        }

        try {
            // Aquí pasamos el token correctamente a la función jwtDecode
            const decodedToken = jwtDecode(token); 
            // Asumimos que el correo electrónico está en el campo "email" del payload del token
            setEmail(decodedToken.email);
        } catch (error) {
            console.error("Error al decodificar el token", error);
        }
    }, [token, navigate]);

    return (
        <ul className="navbar-nav ul-menu barra-lateral" id="accordionSidebar">
            <Link className="conten-admin" to={"/panelAdmin"}>
                <div className="sidebar-brand-icon rotate-n-15">
                    <iconify-icon icon="twemoji:man-technologist-medium-skin-tone"></iconify-icon>
                </div>
                <h6 className="h6-tex-admin">{email}</h6>
            </Link>

            <li className="li-menu">
                <Link to={"/panelAdmin"} className="conten-icon-span">
                    <iconify-icon icon="ic:baseline-home"></iconify-icon>
                    <span className="span-menu">home</span>
                </Link>
            </li>

            <li className="li-menu">
                <Link className="collapsed conten-icon-span" to={"#"} data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <iconify-icon icon="unjs:unbuild"></iconify-icon>
                    <span className="span-menu">producto</span>
                    <iconify-icon icon="bx:chevron-down"></iconify-icon>
                </Link>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white rounded">
                        <Link className="collapse-item" to={"/iphoneAdmin"}>iphone</Link>
                        <Link className="collapse-item" to={"/sansungAdmin"}>sangung</Link>
                        <Link className="collapse-item" to={"/xiaomiAdmin"}>xiaomi</Link>
                        <Link className="collapse-item" to={"/iphoneAcesoryAdmin"}>iphone accesorio</Link>
                        <Link className="collapse-item" to={"/sansungAcesoryAdmin"}>sansung accesorio</Link>
                        <Link className="collapse-item" to={"/xiaomiAcesoryAdmin"}>xiaomi accesorio</Link>
                        <Link className="collapse-item" to={"/masBuscado"}>mas buscado</Link>
                        <Link className="collapse-item" to={""}>variado</Link>
                    </div>
                </div>
            </li>
            <li className="li-menu">
                <Link to={"#"} className="conten-icon-span">
                    <iconify-icon icon="flat-color-icons:assistant"></iconify-icon>
                    <span className="span-menu">usuarios</span>
                </Link>
            </li>
            <li className="li-menu">
                <Link to={"#"} className="conten-icon-span">
                    <iconify-icon icon="emojione-v1:chart-increasing"></iconify-icon>
                    <span className="span-menu">estadistica</span>
                </Link>
            </li>
        </ul>
    );
}
