import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useSyncExternalStore } from "react";


export function Perfil() {
    const [showMobileMenu, setshowMobileMenu] = useState(false)
    const { logout, user } = useAuth();
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };


    return (
        <div>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-white text-dark" style={{ borderradius: '1rem' }}>
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <center><p className="text-xl mb-4">Bienvenido</p></center>
                                    <center><p> {user.displayName || user.email}</p></center>

                                    <Link to="/login" style={{ textDecoration: 'none', color: '#64b2ff' }} onClick={handleLogout}>
                                        <button type="button" class="btn btn-primary">Desconectarse</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}