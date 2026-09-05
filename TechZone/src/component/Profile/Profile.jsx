import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUserData(JSON.parse(savedUser));
        } else {
        //    IF DATA EMPTY CONTINO GEST 
            setUserData({ username: "Guest User", email: "user@example.com" });
        }
    }, []);

    function handleLogout() {
        localStorage.removeItem("user");
        navigate("/register");
    }

    if (!userData) return null;

    return (
        <section className="py-5 bg-body text-body min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="bg-body-tertiary p-4 p-md-5 mx-auto text-center border rounded-3 shadow-sm" style={{ maxWidth: '500px' }}>
                    <div className="mb-3">
                        <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold fs-1" style={{ width: '80px', height: '80px' }}>
                            {userData.username ? userData.username.charAt(0).toUpperCase() : 'U'}
                        </div>
                    </div>

                    <h3 className="fw-bold text-body mb-1">{userData.username}</h3>
                    <p className="text-body-secondary small mb-4">{userData.email}</p>

                    <div className="p-3 bg-body rounded-3 border mb-4 text-start">
                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-body-secondary small">Account Status:</span>
                            <span className="badge bg-success-subtle text-success border border-success-subtle">Active</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="text-body-secondary small">Member Since:</span>
                            <span className="fw-semibold text-body small">2026</span>
                        </div>
                    </div>

                    <div className="d-flex gap-2">
                        <Link to="/shop" className="btn btn-outline-secondary w-50 py-2 fw-semibold">
                            Go to Shop
                        </Link>
                        <button onClick={handleLogout} className="btn btn-danger w-50 py-2 fw-semibold">
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}