import React from 'react'
import Layout from '../../componentes/Layout'
import Redes from "../../componentes/Redes"
import Footer from "../../componentes/Footer"
import banner from '../../public/b_contacto.jpg'
import Image from 'next/image'
import Link from 'next/link'
import {escribenos,trabaja,factura} from "../../public/Contacto/index"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contacto() {
    return (
        <Layout>
            <div className="banner-domicilios">
            <Image src={banner} width="1200" height="400" priority objectFit="cover" layout="responsive" >
            </Image>
            <h3>Contacto<br/></h3><p>Queremos saber de ti</p>
            </div>
            <div className="articulos">
            <div className="articulos-body">
                  <Link href={`Contacto/Escribenos`}><h2>Escribenos</h2></Link>
                  <div className="image-articule"><Image src={escribenos} width="280" height="280" priority objectFit="cover"></Image></div>
            </div>
            <div className="articulos-body">
                  <Link href={`Contacto/Trabajos`}><h2>Trabaja con nosotros</h2></Link>
                  <div className="image-articule"><Image src={trabaja} width="280" height="280" priority objectFit="cover"></Image></div>
            </div>
            <div className="articulos-body">
                  <Link href={`Contacto/Facturacion`}><h2>Facturación Electrónica</h2></Link>
                  <div className="image-articule"><Image src={factura} width="280" height="280" priority objectFit="cover"></Image></div>
            </div>
            </div>
            <Redes/>
            <Footer/>
        </Layout>
    )
}
