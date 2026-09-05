import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function HeroCarousel() {
    return (
        <section
            id="heroCarousel"
            className="carousel slide carousel-fade shadow-lg bg-dark rounded-3 overflow-hidden w-100"
            data-bs-ride="carousel"
            data-bs-interval="4000"
        >
            {/* THE BOTTOM SLIIDER DOTED  */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
            </div>

            <div className="carousel-inner">
                {/* FIRST PHOTO  */}
                <div className="carousel-item active">
                    <div className="position-relative w-100" style={{ height: 'clamp(280px, 45vh, 500px)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1600&q=80"
                            className="w-100 h-100"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            alt="Next-Gen PC Components"
                        />
                       {/* OVERLAY OPACTY  */}
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />

                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 top-0 bottom-0">
                            <h1 className="fw-bold text-uppercase display-6 text-white mb-2 text-shadow">Upgrade Your Rig</h1>
                            <p className="fs-6 text-light mb-3 d-none d-sm-block">Discover high-performance Graphics Cards, CPUs, and PC cases.</p>
                            <NavLink to="/shop" className="btn btn-primary btn-sm btn-md-lg px-4 fw-semibold rounded-pill">
                                Shop Components
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* SECOND PHOTO  */}
                <div className="carousel-item">
                    <div className="position-relative w-100" style={{ height: 'clamp(280px, 45vh, 500px)' }}>
                        <img
                            src="https://m.media-amazon.com/images/I/714haFb-zoL._AC_SL1500_.jpg"

                            className="w-100 h-100"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            alt="Gaming Keyboards and Accessories"
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />

                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 top-0 bottom-0">
                            <h1 className="fw-bold text-uppercase display-6 text-white mb-2">Upgrade your Keyboard</h1>
                            <p className="fs-6 text-light mb-3 d-none d-sm-block">Precision mechanical keyboards</p>
                            <NavLink to="/keyboards" className="btn btn-outline-light btn-sm btn-md-lg px-4 fw-semibold rounded-pill">
                                Explore Gear
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* LAST PHOTO  */}
                <div className="carousel-item">
                    <div className="position-relative w-100" style={{ height: 'clamp(280px, 45vh, 500px)' }}>
                        <img
                            src="https://www.megabites.com.ph/wp-content/uploads/2024/09/Nitro-XV270U-F5-03.jpg"
                            className="w-100 h-100"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            alt="High Refresh Rate Monitors"
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />

                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 top-0 bottom-0">
                            <h1 className="fw-bold text-uppercase display-6 text-white mb-2">Immersive Displays</h1>
                            <p className="fs-6 text-light mb-3 d-none d-sm-block">Experience ultra-smooth gameplay with high refresh rate gaming monitors.</p>
                            <NavLink to="/monitors" className="btn btn-primary btn-sm btn-md-lg px-4 fw-semibold rounded-pill">
                                View Monitors
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

           {/* SWITSH BUTTON  */}
           {/* LEFT BUTTON  */}
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            {/* RIGHT BUTTON  */}
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </section>
    );
}