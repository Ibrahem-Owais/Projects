import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        userName: "",
        userEmail: "",
        userPassword: ""
    });

    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrorMsg("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        // CHECK IF THE PASS DONT LESS THAN 8 
        if (user.userPassword.length < 8) {
            const msg = "Password must be at least 8 characters long";
            setErrorMsg(msg);
            toast.error(msg);
            return;
        }

        // CHECK IF EMAIL AND NAME FILL 
        if (!user.userName.trim() || !user.userEmail.trim()) {
            const msg = "Please fill in all required fields";
            setErrorMsg(msg);
            toast.error(msg);
            return;
        }

        const toastId = toast.loading("Creating account...");

        const userData = {
            username: user.userName.trim(),
            email: user.userEmail.trim()
        };
        localStorage.setItem("user", JSON.stringify(userData));

        toast.success("Success! Redirecting to Home...", { id: toastId });

        setTimeout(() => {
            navigate("/"); // تم التغيير للتوجيه إلى الصفحة الرئيسية
        }, 1000);
    }

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />

            <section className="py-5 bg-body text-body min-vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="bg-body-tertiary p-4 p-md-5 mx-auto text-center border rounded-3 shadow-sm" style={{ maxWidth: '450px' }}>
                        <h2 className="fw-bold mb-4 text-body">Create Account</h2>

                        {errorMsg && (
                            <div className="alert alert-danger py-2 text-center mb-3 fs-6" role="alert">
                                {errorMsg}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="userName"
                                    className="form-control bg-body text-body py-2 text-center"
                                    placeholder="Username"
                                    required
                                    value={user.userName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="userEmail"
                                    className="form-control bg-body text-body py-2 text-center"
                                    placeholder="Email Address"
                                    required
                                    value={user.userEmail}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="password"
                                    name="userPassword"
                                    className="form-control bg-body text-body py-2 text-center"
                                    placeholder="Password (Min 8 characters)"
                                    required
                                    minLength={8}
                                    value={user.userPassword}
                                    onChange={handleChange}
                                />
                                <div className="form-text text-body-secondary mt-1" style={{ fontSize: '12px' }}>
                                    Password must be at least 8 characters long.
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold shadow-sm">
                                Register & Continue
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}