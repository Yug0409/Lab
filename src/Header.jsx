import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const isAuth = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <header>
            <Link to="/">Home</Link>
            {isAuth ? (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </>
            ) : (
                <Link to="/">Logout</Link>
            )}
        </header>
    );
}

export default Header;
