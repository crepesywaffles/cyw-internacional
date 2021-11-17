import React from 'react'
import Layout from '../../componentes/Layout'
import { useRouter } from 'next/dist/client/router'
import apiURL from "../../utils/apiURL"
import Image from 'next/image'
import Escribenos from "../../componentes/Escribenos"
import Trabajos from "../../componentes/Trabajos"
import Facturacion from "../../componentes/Facturacion"

export default function contacto() {
    const router = useRouter()
    return (
        <Layout>
            {router.query.contacto == "Escribenos" ?
            <Escribenos/>
        : null}
        {router.query.contacto == "Trabajos" ?
            <Trabajos/>
        : null}
        {router.query.contacto == "Facturacion" ?
            <Facturacion/>
        : null}
        </Layout>
    )
}
