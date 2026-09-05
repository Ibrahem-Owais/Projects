import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../../assets/photo-logo.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isPcComponentsOpen, setIsPcComponentsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // LOCAL STORAGE OF DEFAULT THEME (LIGHT)
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    const submenuRef = useRef(null);
    const navigate = useNavigate();

    // DARK THEME ON SCREEN
    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const handleNavLinkClick = () => {
        setIsPcComponentsOpen(false);

        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            } else {
                navbarCollapse.classList.remove('show');
            }
        }

        const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
        openDropdowns.forEach((menu) => menu.classList.remove('show'));
    };

    const togglePcComponents = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsPcComponentsOpen((prev) => !prev);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm('');
            handleNavLinkClick();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (submenuRef.current && !submenuRef.current.contains(event.target)) {
                setIsPcComponentsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm fixed-top">
                <div className="container-fluid">
                    
                    <Link
                        className="navbar-brand d-inline-flex align-items-center text-decoration-none fw-bold"
                        to="/home"
                        onClick={handleNavLinkClick}
                        style={{ letterSpacing: '8px' }}
                    >
                        <span className="tex-one p-text d-inline-block text-body">Tech</span>
                        <span className="text-logo p-text d-inline-flex align-items-center mx-1" style={{ letterSpacing: 'normal', color: '#1B64F2' }}>
                            Z
                            <img src={logoImg} alt="TechZone Logo" width="30" height="30" />
                        </span>
                        <span className="text-last p-text d-inline-block" style={{ color: '#1B64F2' }}>ne</span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home" onClick={handleNavLinkClick}>Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop" onClick={handleNavLinkClick}>Shop</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </a>

                                <ul className="dropdown-menu">
                                    <li ref={submenuRef}>
                                        <button
                                            type="button"
                                            className={`dropdown-item d-flex justify-content-between align-items-center ${styles.customSubmenuToggle}`}
                                            onClick={togglePcComponents}
                                        >
                                            <span>PC Components</span>
                                            <span style={{ fontSize: '10px', transform: isPcComponentsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                                ▼
                                            </span>
                                        </button>

                                        <ul className={`${styles.nestedDropdownMenu} bg-body-tertiary rounded-2 py-1 ${isPcComponentsOpen ? styles.show : ''}`}>
                                            <li>
                                                <NavLink className={`dropdown-item ps-4 ${styles.subItem}`} to="/case" onClick={handleNavLinkClick}>
                                                    Case
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className={`dropdown-item ps-4 ${styles.subItem}`} to="/ram" onClick={handleNavLinkClick}>
                                                    RAM
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className={`dropdown-item ps-4 ${styles.subItem}`} to="/gpu" onClick={handleNavLinkClick}>
                                                    Graphics Cards (GPU)
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className={`dropdown-item ps-4 ${styles.subItem}`} to="/motherboard" onClick={handleNavLinkClick}>
                                                    Motherboard
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="/monitors" onClick={handleNavLinkClick}>Monitors</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/keyboards" onClick={handleNavLinkClick}>Keyboards</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/mouse" onClick={handleNavLinkClick}>Mouse</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/accessories" onClick={handleNavLinkClick}>Accessories</NavLink></li>
                                </ul>
                            </li>
                        </ul>

                        <form className="d-flex me-lg-3 my-2 my-lg-0" role="search" onSubmit={handleSearchSubmit}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search products..."
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>

                        <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                            {/* PROFILE ICON  */}
                            <NavLink
                                to="/profile"
                                className={`d-flex align-items-center justify-content-center text-decoration-none rounded-circle ${styles.profileBtn}`}
                                title="Profile"
                                onClick={handleNavLinkClick}
                            >
                                <User size={20} className={styles.profileIcon} />
                            </NavLink>

                            {/* Theme Switch Toggle */}
                            <div className="form-check form-switch d-flex align-items-center gap-2 m-0 ps-0">
                                <input
                                    className="form-check-input ms-0 cursor-pointer"
                                    type="checkbox"
                                    role="switch"
                                    id="themeSwitch"
                                    checked={theme === 'dark'}
                                    onChange={toggleTheme}
                                    style={{ width: '2.5em', height: '1.3em', cursor: 'pointer' }}
                                />
                                <label className="form-check-label cursor-pointer user-select-none" htmlFor="themeSwitch" style={{ cursor: 'pointer' }}>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}