import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {mexicoimagen,ecuadorimagen} from "../public/menus/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import Redes from '../componentes/Redes';
import FooterLink from '../componentes/FooterLink';


export default function Facturacion() {
    return (
        <div>
            <h2 className="title-menu mt-5">Facturación Electrónica</h2>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="img-menu">
            <Link href="https://online.flippingbook.com/view/576120512/" ><a target="_blank"><Image src={mexicoimagen}></Image></a></Link>
          </div>
          <div className="img-menu">
            <Link href="http://edocs.gfsys.info/" ><a target="_blank"><Image src={ecuadorimagen}></Image></a></Link>
          </div>
          {/* <div className="img-menu" >
            <Link href="https://fiweex.com/sistema/img/pdf/carta%20QR%20FINAL%2003%20SEP%202020-compressed.pdf" ><a target="_blank"><Image src={chilemenu}></Image></a></Link>
          </div>
          <div className="img-menu">
            <Link href="https://digital.adhocwifi.com/es/crepes/waffles/local"><a target="_blank"><Image src={españamenu}></Image></a></Link>
          </div>
          <div className="img-menu">
            <Link href="https://qr.precompro.com/?vendor=crepespanama" target="_blank"><a target="_blank"><Image src={panamamenu}></Image></a></Link>
          </div> */}
        </div>
        <Redes/>
        <FooterLink/>
        </div>
    )
}
