import React from 'react';
import './home.css';
import Header from './Header';
import Footer from './Footer';

function Home()  {
    return (
        <div>
            
            {/* barre de menu  */}
            <Header />
        
            <section className="hero relative !pt-16 min-h-screen" id="accueil">
                <div className="hero-content fade-in-up">
                    <h1>Trouvez le terrain parfait pour votre projet</h1>
                    <p>Découvrez notre sélection premium de terrains constructibles, agricoles et forestiers dans toute la
                        région</p>
                    <div className="hero-buttons">
                        <a href="#terrains" className="btn-primary">Voir les terrains</a>
                        <a href="#contact" className="btn-secondary">Demander conseil</a>
                    </div>
                </div>
            </section>

            
            <section className="search-section">
                <div className="search-container">
                    <div className="search-form">
                        <h2 className="search-title">Recherchez votre terrain idéal</h2>
                        <div className="search-filters">
                            <div className="filter-group">
                                <label className="filter-label">Localisation</label>
                                <input type="text" className="filter-input" placeholder="Ville, département..."/>
                            </div>
                            <div className="filter-group">
                                <label className="filter-label">Type de terrain</label>
                                <select className="filter-select">
                                    <option>Tous les types</option>
                                    <option>Constructible</option>
                                    <option>Agricole</option>
                                    <option>Forestier</option>
                                    <option>Industriel</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label className="filter-label">Surface minimum (m²)</label>
                                <input type="number" className="filter-input" placeholder="1000"/>
                            </div>
                            <div className="filter-group">
                                <label className="filter-label">Prix maximum (€)</label>
                                <input type="number" className="filter-input" placeholder="100000"/>
                            </div>
                        </div>
                        <button className="search-btn">🔍 Rechercher</button>
                    </div>
                </div>
            </section>

            
            <section className="terrains-section" id="terrains">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Terrains disponibles</h2>
                        <p className="section-subtitle">Une sélection rigoureuse de terrains de qualité pour tous vos projets</p>
                    </div>

                    <div className="terrains-grid">
                
                        <div className="terrain-card floating">
                            <div className="terrain-image">
                                <div className="terrain-badge">Constructible</div>
                                <div className="terrain-price-tag">89 500 €</div>
                            </div>
                            <div className="terrain-info">
                                <h3 className="terrain-title">Terrain résidentiel - Vue panoramique</h3>
                                <div className="terrain-location">
                                    📍 Bourg-en-Bresse, Ain (01)
                                </div>
                                <div className="terrain-specs">
                                    <div className="spec-item">
                                        <div className="spec-icon">📏</div>
                                        <span>1,250 m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">💰</div>
                                        <span>72 €/m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">🏗️</div>
                                        <span>Viabilisé</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">📋</div>
                                        <span>Permis ok</span>
                                    </div>
                                </div>
                                <div className="terrain-actions">
                                    <button className="btn-view">Voir le détail</button>
                                    <button className="btn-favorite">❤️</button>
                                </div>
                            </div>
                        </div>

                    
                        <div className="terrain-card floating">
                            <div className="terrain-image im1" >
                                <div className="terrain-badge im2">
                                    Agricole</div>
                                <div className="terrain-price-tag">45 000 €</div>
                            </div>
                            <div className="terrain-info">
                                <h3 className="terrain-title">Grande parcelle agricole</h3>
                                <div className="terrain-location">
                                    📍 Mâcon, Saône-et-Loire (71)
                                </div>
                                <div className="terrain-specs">
                                    <div className="spec-item">
                                        <div className="spec-icon">📏</div>
                                        <span>5,000 m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">💰</div>
                                        <span>9 €/m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">🚜</div>
                                        <span>Zone A</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">💧</div>
                                        <span>Point d'eau</span>
                                    </div>
                                </div>
                                <div className="terrain-actions">
                                    <button className="btn-view">Voir le détail</button>
                                    <button className="btn-favorite">❤️</button>
                                </div>
                            </div>
                        </div>

                        
                        <div className="terrain-card floating">
                            <div className="terrain-image im3" >
                                <div className="terrain-badge im4" >Forestier</div>
                                <div className="terrain-price-tag">125 000 €</div>
                            </div>
                            <div className="terrain-info">
                                <h3 className="terrain-title">Forêt de chênes centenaires</h3>
                                <div className="terrain-location">
                                    📍 Chalon-sur-Saône, Saône-et-Loire (71)
                                </div>
                                <div className="terrain-specs">
                                    <div className="spec-item">
                                        <div className="spec-icon">📏</div>
                                        <span>8,500 m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">💰</div>
                                        <span>15 €/m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">🌳</div>
                                        <span>Chênes</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">🛤️</div>
                                        <span>Accès route</span>
                                    </div>
                                </div>
                                <div className="terrain-actions">
                                    <button className="btn-view">Voir le détail</button>
                                    <button className="btn-favorite">❤️</button>
                                </div>
                            </div>
                        </div>

                        
                        <div className="terrain-card floating">
                            <div className="terrain-image im5" >
                                <div className="terrain-badge im6" >Constructible</div>
                                <div className="terrain-price-tag">156 000 €</div>
                            </div>
                            <div className="terrain-info">
                                <h3 className="terrain-title">Terrain proche centre-ville</h3>
                                <div className="terrain-location">
                                    📍 Lyon Sud, Rhône (69)
                                </div>
                                <div className="terrain-specs">
                                    <div className="spec-item">
                                        <div className="spec-icon">📏</div>
                                        <span>950 m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">💰</div>
                                        <span>164 €/m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">🚇</div>
                                        <span>Transports</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">🏫</div>
                                        <span>Écoles</span>
                                    </div>
                                </div>
                                <div className="terrain-actions">
                                    <button className="btn-view">Voir le détail</button>
                                    <button className="btn-favorite">❤️</button>
                                </div>
                            </div>
                        </div>

                        
                        <div className="terrain-card floating">
                            <div className="terrain-image im7">
                                <div className="terrain-badge im8" >Industriel</div>
                                <div className="terrain-price-tag">280 000 €</div>
                            </div>
                            <div className="terrain-info">
                                <h3 className="terrain-title">Zone industrielle - Logistique</h3>
                                <div className="terrain-location">
                                    📍 Villefranche-sur-Saône,
                                    Rhône (69)
                                </div>
                                <div className="terrain-specs">
                                    <div className="spec-item">
                                        <div className="spec-icon">📏</div>
                                        <span>3,200 m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">💰</div>
                                        <span>87 €/m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">🚛</div>
                                        <span>Accès poids lourds</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">🏭</div>
                                        <span>Zone ZI</span>
                                    </div>

                                </div>
                                <div className="terrain-actions">
                                    <button className="btn-view">Voir le détail</button>
                                    <button className="btn-favorite">❤️</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="terrain-card floating">
                            <div className="terrain-image im9" >
                                <div className="terrain-badge im10" >Industriel</div>
                                <div className="terrain-price-tag">280 000 €</div>
                            </div>
                            <div className="terrain-info">
                                <h3 className="terrain-title">Zone industrielle - Logistique</h3>
                                <div className="terrain-location">
                                    📍 Villefranche-sur-Saône,
                                    Rhône (69)
                                </div>
                                <div className="terrain-specs">
                                    <div className="spec-item">
                                        <div className="spec-icon">📏</div>
                                        <span>3,200 m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">💰</div>
                                        <span>87 €/m²</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">🚛</div>
                                        <span>Accès poids lourds</span>
                                    </div>
                                    <div className="spec-item">
                                        <div className="spec-icon">🏭</div>
                                        <span>Zone ZI</span>
                                    </div>
                        
                                </div>
                                <div className="terrain-actions">
                                    <button className="btn-view">Voir le détail</button>
                                    <button className="btn-favorite">❤️</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="services-section" id="services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Nos services</h2>
                        <p className="section-subtitle">Accompagnement complet pour vos projets d'achat de terrain</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card fade-in-up">
                            <div className="service-icon">🛠️</div>
                            <h3 className="service-title">Conseil personnalisé</h3>
                            <p className="service-description">Nos experts vous guident dans le choix du terrain adapté à vos besoins
                                et contraintes.</p>
                        </div>
                        <div className="service-card fade-in-up im11" >
                            <div className="service-icon">📄</div>
                            <h3 className="service-title">Assistance administrative</h3>
                            <p className="service-description">Nous prenons en charge les démarches administratives et juridiques
                                liées à l'achat.</p>
                        </div>
                        <div className="service-card fade-in-up im12" >
                            <div className="service-icon">🏗️</div>
                            <h3 className="service-title">Études de faisabilité</h3>
                            <p className="service-description">Analyse technique et environnementale pour garantir la viabilité de
                                votre projet.</p>
                        </div>
                        <div className="service-card fade-in-up im13" >
                            <div className="service-icon">🤝</div>
                            <h3 className="service-title">Négociation & Achat</h3>
                            <p className="service-description">Nous négocions les meilleures conditions d'achat en votre nom.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer /> 
        </div>
    );
}

export default Home;
