import React from 'react'
import Layout from '../componentes/Layout'
import Footer from "../componentes/Footer"
import Menu from "../componentes/Menus"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menus() {
    return (
        <Layout>
            <Menu/>
            <Footer/>
        </Layout>
    )
}
