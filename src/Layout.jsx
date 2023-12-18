import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
function Layout() {
    const location = useLocation()
    if (location.pathname === '/')
        return <Navigate to="/home" />

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
