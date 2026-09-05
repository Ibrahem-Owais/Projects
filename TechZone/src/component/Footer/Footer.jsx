import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-body-tertiary text-body pt-5 pb-3 mt-5 border-top">
            <div className="container">
                <div className="row g-4">

                   {/* ABOUT SECTION  */}
                    <section className="col-12 col-md-4">
                        <h5 className="fw-bold text-primary mb-3">TechZone</h5>
                        <p className="text-body-secondary small">
                            Your go-to store for buying the latest gadgets and electronic accessories at the best prices and quality.
                        </p>
                    </section>

                    {/* CONTACT US SECTION  */}
                    <section className="col-12 col-md-6 col-lg-4 ms-auto">
                        <h6 className="fw-bold mb-3 text-uppercase fs-6"> Contact US </h6>
                        <ul className="list-unstyled small text-body-secondary">
                            <li className="mb-2 d-flex align-items-center gap-2">
                                {/* I GET THIS FROM AI  */}
                                <span>📞</span>
                                <a className="text-body-secondary text-decoration-none" href="tel:01114166311">
                                    01114166311
                                </a>
                            </li>
                            <li className="mb-2 d-flex align-items-center gap-2">
                                {/* I GET THIS FROM AI  */}
                                <span>✉️</span>
                                <a className="text-body-secondary text-decoration-none" href="mailto:elelnesr3@gmail.com">
                                    elelnesr3@gmail.com
                                </a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                {/* I GET THIS FROM AI  */}
                                <span>📍</span>
                                <span>Cairo, Egypt</span>
                            </li>
                        </ul>
                    </section>

                </div>

                <hr className="my-4 border-secondary opacity-25" />

                {/* TERMS SECTION  */}
                <section className="row align-items-center small text-body-secondary">
                    <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                        © {new Date().getFullYear()} TechZone...Created By Ibrahim-Owais
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <a href="#" className="text-body-secondary text-decoration-none me-3">Terms and conditions</a>
                    </div>
                </section>

            </div>
        </footer>
    );
}