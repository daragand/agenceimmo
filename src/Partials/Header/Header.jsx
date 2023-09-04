import "./style.css";
import { Link } from "react-router-dom";



export default function Header() {

    return (
        <nav className="header">
            <h2>Prepagence <br />Immo</h2>
            <nav id="menu">
                <Link className="navigation" to="/">Accueil</Link>
                <Link className="navigation" to="/annonces">Annonces</Link>
                <Link className="navigation" to="/contact">Contact</Link>
            </nav>
        </nav>
    )
}