import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('search') || '';

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                if (!res.ok) throw new Error('Conaction Faild');
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('API Error:', err);
                setError('API Conaction Faild');
                setLoading(false);
            });
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        if (value) {
            setSearchParams({ search: value });
        } else {
            setSearchParams({});
        }
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        //  TO APLLAY THE DARK THEM 
        <section className="py-5 bg-body min-vh-100">
            <div className="container">
                <h2 className="fw-bold mb-4 text-center text-md-start bg-body-secondary text-body p-2 rounded">
                    Shop Products
                </h2>

              {/* SEARCH BAR  */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="input-group shadow-sm">
                            <span className="input-group-text bg-body-tertiary border-end-0">🔍</span>
                            <input
                                type="text"
                                className="form-control border-start-0 py-2"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                </div>

                {loading && (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status"></div>
                        <p className="mt-2 text-body-secondary fw-semibold">Loading Products...</p>
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger text-center my-4" role="alert">
                        {error}
                    </div>
                )}

                {!loading && !error && (
                    <div className="row g-4 justify-content-center justify-content-md-start">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                    <div className="card h-100 shadow-sm border-0 bg-body-tertiary">
                                        <Link to={`/shop-product-details/${product.id}`} className="p-3 text-center rounded-top bg-white">
                                            <img
                                                src={product.image}
                                                className="card-img-top object-fit-contain"
                                                alt={product.title}
                                                style={{ height: '200px' }}
                                            />
                                        </Link>

                                        <div className="card-body d-flex flex-column">
                                            <Link to={`/shop-product-details/${product.id}`} className="text-decoration-none text-body">
                                                <h5 className="card-title fw-bold fs-6 mb-2 text-truncate" title={product.title}>
                                                    {product.title}
                                                </h5>
                                            </Link>

                                            <p className="card-text mb-2 text-body-secondary small text-truncate">
                                                {product.description}
                                            </p>

                                            <span className="fs-5 fw-bold text-primary my-2">${product.price}</span>

                                            <div className="mt-auto d-flex gap-2">
                                                <button className="btn btn-primary w-100 fw-semibold">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <h5 className="text-body-secondary">No products found for "{searchTerm}"</h5>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}