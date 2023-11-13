import { CgPill } from "react-icons/cg";
import { Link } from "react-router-dom";
import './header.style.css';



export const Header = () => {
    return (
        <header className="header-container">
            <div className="icon-header">
                <CgPill/>
                <h1>RDP</h1>
            </div>
            <div className="header-options">
                <Link to="/" >HOME</Link>
                <Link to="/postagens/categorias/desenvolvimentopessoal" >DESENVOLVIMENTO</Link>
                <Link to="/postagens/categorias/modamasculina" >MODA MASCULINA</Link>
                <Link to="/postagens/categorias/redpill" >RED PILL</Link>
                <Link to="/sobre" >SOBRE</Link>
            </div>
        </header>
    )
}