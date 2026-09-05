import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* NAVIGATION BAR  */}
            <Navbar />

            {/* MAIN OF PAGES TO SHOW THE PAGE IS RUN  */}
            <main className="flex-grow-1">
                <Outlet />
            </main>

            {/* FOOTER OF PAGE  */}
            <Footer />
        </div>
    );
}