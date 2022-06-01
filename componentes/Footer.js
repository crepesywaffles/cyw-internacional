import React from 'react'
import Image from 'next/image'
import footer from "../public/Footer.jpg"
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="footer">
            <Image src={footer} sizes="100vw"></Image>
            </div>
            <div className="link-footer">
            <Link href="Contacto/Facturacion" ><a>Facturación electrónica</a></Link>
            <Link href="Contacto/Escribenos" ><a>Escríbenos</a></Link> 
            <Link href="Contacto/Trabajos" ><a>Trabaja con nosotros</a></Link>
            </div>
            <p className="text-center mb-2">©2021 Crepes & Waffles S.A | All Rights Reserved</p>
        </footer>
    )
}
