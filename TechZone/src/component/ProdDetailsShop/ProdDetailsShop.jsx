import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProdDetailsShop() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
            // DESTRUCT ID OR GET ID FROM API 
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('Product not found');
                return res.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(true);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="container py-5 text-center min-vh-100 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" role="status"></div>
                <span className="ms-2 fw-semibold text-body-secondary">Loading product details...</span>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="container py-5 text-center min-vh-100">
                <h3 className="text-danger fw-bold mb-3">Product Not Found</h3>
                <Link to="/shop" className="btn btn-primary">
                    ← Back to Shop
                </Link>
            </div>
        );
    }

    return (
        <section className="py-5 bg-body text-body min-vh-100">
            <div className="container">
                <div className="mb-4">
                    <Link to="/shop" className="btn btn-outline-secondary btn-sm rounded-pill px-3">
                        ← Back to Shop
                    </Link>
                </div>

                <div className="row g-5 align-items-center">
                    <div className="col-12 col-md-5 text-center">
                        <div className="p-4 border rounded-3 bg-body-tertiary shadow-sm">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="img-fluid object-fit-contain"
                                style={{ maxHeight: '380px', width: '100%' }}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-7 d-flex flex-column">
                        <span className="badge bg-body-tertiary text-body border w-auto align-self-start mb-2 text-capitalize">
                            {product.category}
                        </span>

                        <h1 className="fw-bold fs-3 text-body mb-3">{product.title}</h1>

                        <div className="d-flex align-items-center gap-2 mb-3">
                            <div className="text-warning small">
                                {/* THIS IS STATEC STARS FROM AI  */}
                                ★ ★ ★ ★ ☆ <span className="text-body-secondary">({product.rating?.rate} / 5)</span>
                            </div>
                            <span className="text-body-secondary">|</span>
                            <span className="text-body-secondary small">{product.rating?.count} reviews</span>
                        </div>

                        <hr className="my-2 border-secondary opacity-25" />

                        <div className="my-3">
                            <span className="text-body-secondary small d-block">Price:</span>
                            <span className="fs-2 fw-bold text-primary">${product.price}</span>
                        </div>

                        <div className="mb-4 p-3 bg-body-tertiary rounded-3 border">
                            <h6 className="fw-bold text-body mb-2">Description:</h6>
                            <p className="text-body-secondary small mb-0">{product.description}</p>
                        </div>

                        <div className="pt-2 border-top border-secondary opacity-75 mt-auto">
                            <div className="row g-2">
                                <div className="col-12 col-sm-6">
                                    <button className="btn btn-primary btn-lg w-100 fw-semibold fs-6 py-2 shadow-sm">
                                        {/* THIS ICON FROM AI  */}
                                        🛒 Add to Cart
                                    </button>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <button className="btn btn-warning btn-lg w-100 fw-semibold fs-6 py-2 shadow-sm text-dark">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}