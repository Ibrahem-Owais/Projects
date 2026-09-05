import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout() {
    const location = useLocation();

    const hideNavAndFooter = location.pathname === '/' || location.pathname === '/register';

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* TO HIDE THE NAV IN REGESTER  */}
            {!hideNavAndFooter && <Navbar />}

            {/* MAIN OF PAGES TO SHOW THE PAGE IS RUN */}
            <main className="flex-grow-1">
                <Outlet />
            </main>

            {/* TO HIDE THE FOOTER IN REGESTER  */}
            {!hideNavAndFooter && <Footer />}
        </div>
    );
}