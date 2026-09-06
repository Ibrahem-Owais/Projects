import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import FloatingCart from '../FloatingCart/FloatingCart';

export default function Layout() {
    const location = useLocation();

    // TO HIDE THE NAVIGATION & FOOTER & FLOATING CART IN REGISTER 
    const hideNavAndFooter = location.pathname === '/' || location.pathname === '/register';

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* NAVIGATION BAR */}
            {!hideNavAndFooter && <Navbar />}

            {/* FLOATING CART WIDGET */}
            {!hideNavAndFooter && <FloatingCart />}

            {/* MAIN CONTENT AREA */}
            <main className="flex-grow-1">
                <Outlet />
            </main>

            {/* FOOTER */}
            {!hideNavAndFooter && <Footer />}
        </div>
    );
}