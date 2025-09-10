import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <>
            
            <header className="header">
                <nav className="nav-container">
                    <div className="logo flex">
                        <div className="logo-icon">🏞️</div>
                        TerraVente
                    </div>
                    <ul className="nav-menu">
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li><a href="#terrains">Terrains</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>
                            <Link to="/login" className="contact-btn">Se connecter</Link>
                            {/* <a href="#connect" className="contact-btn">Se connecter</a> */}
                        </li>
                    </ul>
                    <button className="mobile-menu-btn">☰</button>
                </nav>
            </header>
        </>
    )
}

export default Header;
