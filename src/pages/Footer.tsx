export default function Footer() {
    return (
        <>
            <footer className="footer" id="about">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>TerraVente</h3>
                        <p>Votre partenaire de confiance pour l'achat de terrains en France. Nous offrons une sélection
                            exclusive et un accompagnement personnalisé.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Liens utiles</h3>
                        <ul>
                            <li><a href="#accueil">Accueil</a></li>
                            <li><a href="#terrains">Terrains</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contactez-nous</h3>
                        <ul>
                            <li>Email: <a href="#email"> </a></li>
                            <li>Téléphone: <a href="#tel"> </a></li>
                            <li>Adresse: 123 Rue de la Terre, 69000 Lyon</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Suivez-nous</h3>
                        <ul>
                            <li><a href="#Facebook">Facebook</a></li>
                            <li><a href="#Twitter">Twitter</a></li>
                            <li><a href="#LinkedIn">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2025 TerraVente. Tous droits réservés.
                </div>
            </footer>
        </>
    )
}
