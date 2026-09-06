import React, { useContext } from 'react';
import { ShoppingCart, Settings, Plus, Minus, X } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './FloatingCart.module.css';

export default function FloatingCart() {
    const { cart, addToCart, decreaseQuantity, removeFromCart } = useContext(CartContext);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <>
            <div className={styles.floatingWidget}>
                <button className={styles.widgetBtn} title="Settings">
                    <Settings size={20} />
                </button>
                <button
                    className={`${styles.widgetBtn} ${styles.cartBtn}`}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#cartOffcanvas"
                    aria-controls="cartOffcanvas"
                    title="Cart"
                >
                    <ShoppingCart size={20} />
                    {totalItems > 0 && (
                        <span className={styles.badge}>{totalItems}</span>
                    )}
                </button>
            </div>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title fw-bold" id="cartOffcanvasLabel">
                        Shopping Cart ({totalItems})
                    </h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body d-flex flex-column">
                    {cart.length === 0 ? (
                        <div className="text-center my-auto">
                            <ShoppingCart size={48} className="text-muted mb-3" />
                            <p className="fs-5 fw-semibold text-muted">Your cart is empty!</p>
                        </div>
                    ) : (
                        <div className="flex-grow-1 overflow-y-auto pe-1">
                            {cart.map((item) => (
                                <div key={item.id} className={styles.cartCard}>
                                    {/* REMOVE BUTTON  */}
                                    <button
                                        type="button"
                                        onClick={() => removeFromCart(item.id)}
                                        className={styles.deleteBtn}
                                        title="Remove item"
                                    >
                                        <X size={16} />
                                    </button>

                                    {/* CONTAINER OF PHOTO  */}
                                    <div className={styles.imgContainer}>
                                        <img
                                            src={item.image}
                                            alt={item.title || item.name}
                                            className={styles.productImg}
                                        />
                                    </div>

                                    {/* CONTAINER OF CONTENT  */}
                                    <div className={styles.cardContent}>
                                        <h6 className={styles.productTitle} title={item.title || item.name}>
                                            {item.title || item.name}
                                        </h6>

                                        <div className="fw-bold text-primary mb-2">
                                            ${item.price}
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="btn-group btn-group-sm border rounded" role="group">
                                                <button
                                                    type="button"
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    className="btn btn-light py-0 px-2"
                                                >
                                                    <Minus size={12} />
                                                </button>
                                                <span className="btn btn-light disabled text-dark py-0 px-2 fw-semibold">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => addToCart(item)}
                                                    className="btn btn-light py-0 px-2"
                                                >
                                                    <Plus size={12} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {cart.length > 0 && (
                        <div className="border-top pt-3 mt-auto">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="fw-semibold fs-5">Subtotal:</span>
                                <span className="fw-bold fs-5 text-primary">${totalPrice.toFixed(2)}</span>
                            </div>
                            {/* FOR VIWE BUT COOMING SOON  */}
                            <Link
                                to="/cart"
                                className="btn btn-primary w-100 py-2 fw-semibold"
                                data-bs-dismiss="offcanvas"
                            >
                                View Cart & Checkout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}