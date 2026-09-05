import React from 'react';

export default function BestSeller() {
    return (
        <section className="py-5 bg-body text-body rounded">
            <div className="container">
                {/* TITILE OF SECTION  */}
                <h2 className="fw-bold mb-4 text-center text-md-start text-body">Best Sellers</h2>

                {/* CONTAINER OF CONTETN  */}
                <div className="row g-4 justify-content-center justify-content-md-start">

                    {/* CARD-1 */}
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="card h-100 shadow-sm border border-primary overflow-hidden bg-body-tertiary text-body">
                            {/* LINK OF PHOTO */}
                            <img
                                src="https://down-th.img.susercontent.com/file/th-11134207-81ztf-mfrq6wp1f8y3c4"
                                className="card-img-top object-fit-cover"
                                alt="JeDEL(WKL-102)"
                                style={{ height: '200px' }}
                            />
                            <div className="card-body d-flex flex-column">

                                {/* TITLE OF PRODUCT */}
                                <h5 className="card-title fw-bold fs-6 text-body">Jedel WKL102 Mechanical Keyboard</h5>

                                {/* SHORT INFO ABOUT PRODUCT */}
                                <p className="card-text mb-2 text-body-secondary small">
                                    Compact mechanical gaming keyboard with RGB lighting and tri-mode connectivity (Wired, 2.4G, Bluetooth).
                                </p>

                                {/* ALL INFO ABOUT PRODUCT */}
                                <div className="collapse mb-3" id="productDesc1">
                                    <div className="small text-body-secondary pt-2 border-top border-secondary opacity-50">
                                        A compact 88-key mechanical gaming keyboard designed for high performance and durability. Features tri-mode connectivity, hot-swappable switches, Rainbow RGB backlighting with 22 effects, and a 4000mAh battery.
                                    </div>
                                </div>

                                <button
                                    className="btn btn-link text-decoration-none p-0 mb-3 text-start fw-semibold small text-primary"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#productDesc1"
                                    aria-expanded="false"
                                    aria-controls="productDesc1"
                                >
                                    Read More ▼
                                </button>

                                {/* PRICE */}
                                <span className="fs-5 fw-bold text-primary mb-2">$49.99</span>

                                {/* LINK OF BUTTON TO ADD */}
                                <a href="#" className="btn btn-primary mt-auto w-100">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    {/* CARD-2 */}
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="card h-100 shadow-sm border border-primary overflow-hidden bg-body-tertiary text-body">
                            {/* LINK OF PHOTO */}
                            <img
                                src="https://www.applavia.com/wp-content/uploads/2023/01/Logitech-G502-Hero-Review-Best-Gaming-Mouse-1536x864.jpg"
                                className="card-img-top object-fit-cover"
                                alt="LOGITECH(G502)"
                                style={{ height: '200px' }}
                            />
                            <div className="card-body d-flex flex-column">

                                {/* TITLE OF PRODUCT */}
                                <h5 className="card-title fw-bold fs-6 text-body">Logitech G502 Hero Gaming Mouse</h5>

                                {/* SHORT INFO ABOUT PRODUCT */}
                                <p className="card-text mb-2 text-body-secondary small">
                                    High-performance wired gaming mouse with HERO 25K sensor and customizable weights.
                                </p>

                                {/* ALL INFO ABOUT PRODUCT */}
                                <div className="collapse mb-3" id="productDesc2">
                                    <div className="small text-body-secondary pt-2 border-top border-secondary opacity-50">
                                        Features 11 programmable buttons, LIGHTSYNC RGB lighting, adjustable weight system, and mechanical switch button tensioning for precise click feel.
                                    </div>
                                </div>

                                <button
                                    className="btn btn-link text-decoration-none p-0 mb-3 text-start fw-semibold small text-primary"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#productDesc2"
                                    aria-expanded="false"
                                    aria-controls="productDesc2"
                                >
                                    Read More ▼
                                </button>

                                {/* PRICE */}
                                <span className="fs-5 fw-bold text-primary mb-2">$39.99</span>

                                {/* LINK OF BUTTON TO ADD */}
                                <a href="#" className="btn btn-primary mt-auto w-100">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    {/* CARD-3 */}
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="card h-100 shadow-sm border border-primary overflow-hidden bg-body-tertiary text-body">
                            {/* LINK OF PHOTO */}
                            <img
                                src="https://m.media-amazon.com/images/I/716BFcP0rLL._AC_SL1500_.jpg"
                                className="card-img-top object-fit-cover"
                                alt="Gawfolk 27 2K 165Hz Curved Gaming Monitor"
                                style={{ height: '200px' }}
                            />
                            <div className="card-body d-flex flex-column">

                                {/* TITLE OF PRODUCT */}
                                <h5 className="card-title fw-bold fs-6 text-body">Gawfolk 27" 2K 165Hz Curved Gaming Monitor</h5>

                                {/* SHORT INFO ABOUT PRODUCT */}
                                <p className="card-text mb-2 text-body-secondary small">
                                    27-inch 2K QHD curved gaming monitor featuring a 165Hz refresh rate, 1800R curvature, and 99% sRGB color gamut.
                                </p>

                                {/* ALL INFO ABOUT PRODUCT */}
                                <div className="collapse mb-3" id="productDesc3">
                                    <div className="small text-body-secondary pt-2 border-top border-secondary opacity-50">
                                        A 27-inch curved gaming monitor delivering sharp 2K QHD resolution paired with an immersive 1800R curvature. Built for high-speed gaming with a ultra-smooth 165Hz refresh rate that minimizes motion blur and screen tearing. Features 99% sRGB color coverage for vivid visual fidelity, alongside a sleek, gaming-focused stand and slim bezel design.
                                    </div>
                                </div>

                                <button
                                    className="btn btn-link text-decoration-none p-0 mb-3 text-start fw-semibold small text-primary"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#productDesc3"
                                    aria-expanded="false"
                                    aria-controls="productDesc3"
                                >
                                    Read More ▼
                                </button>

                                {/* PRICE */}
                                <span className="fs-5 fw-bold text-primary mb-2">$149.99</span>

                                {/* LINK OF BUTTON TO ADD */}
                                <a href="#" className="btn btn-primary mt-auto w-100">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    {/* CARD-4 */}
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="card h-100 shadow-sm border border-primary overflow-hidden bg-body-tertiary text-body">
                            {/* LINK OF PHOTO */}
                            <img
                                src="https://tse3.mm.bing.net/th/id/OIP.HmTlu8m_ZZGnhDomX4FooQHaHw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                                className="card-img-top object-fit-cover"
                                alt="Xigmatek Gaming X Case"
                                style={{ height: '200px' }}
                            />
                            <div className="card-body d-flex flex-column">

                                {/* TITLE OF PRODUCT */}
                                <h5 className="card-title fw-bold fs-6 text-body">Xigmatek Gaming X Case</h5>

                                {/* SHORT INFO ABOUT PRODUCT */}
                                <p className="card-text mb-2 text-body-secondary small">
                                    Mid-Tower gaming PC case with tempered glass side panel, superior airflow mesh design, and support for up to 6 fans.
                                </p>

                                {/* ALL INFO ABOUT PRODUCT */}
                                <div className="collapse mb-3" id="productDesc4">
                                    <div className="small text-body-secondary pt-2 border-top border-secondary opacity-50">
                                        A professional mid-tower gaming chassis built for high airflow and modern aesthetics. Features a mesh front panel alongside a tempered glass side panel to showcase your build. Supports ATX motherboards, GPUs up to 320mm in length, and CPU coolers up to 160mm tall. Designed with easy cable management, support for up to 6 x 120mm cooling fans, and liquid cooling radiator compatibility (up to 240mm front/top).
                                    </div>
                                </div>

                                <button
                                    className="btn btn-link text-decoration-none p-0 mb-3 text-start fw-semibold small text-primary"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#productDesc4"
                                    aria-expanded="false"
                                    aria-controls="productDesc4"
                                >
                                    Read More ▼
                                </button>

                                {/* PRICE */}
                                <span className="fs-5 fw-bold text-primary mb-2">$59.99</span>

                                {/* LINK OF BUTTON TO ADD */}
                                <a href="#" className="btn btn-primary mt-auto w-100">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}