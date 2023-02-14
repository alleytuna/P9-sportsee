import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/SportSeeLogo.svg"
import "../../styles/header.css"

/**
 * @function Header - displays nav header with menu
 * @returns {JSX} 
 */
export default function Header() {
    return (
        <header>
            <nav className="headerNav">
                <Link to="/" className="logoSportSee">
                    <img src={Logo} alt="" />
                </Link>
                <ul className="headerList">
                    <li>
                        <NavLink to="/" className="headerLink">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="headerLink">Profil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="headerLink">Réglages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="headerLink">Communauté</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
