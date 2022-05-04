import React from 'react'
import Link from 'next/link'
import { mexicomenu, ecuadormenu, chilemenu, españamenu, panamamenu ,panamaimagen,colombiaimagen,mexicoimagen,españaimagen,ecuadorimagen,chileimagen} from "../public/menus/index"
import Image from 'next/image'

export default function Menus() {
    return (
        <div>
            <h2 className="title-menu mt-5">Menús</h2>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="img-menu">
            <Link href="https://online.flippingbook.com/view/1007065914/" ><a target="_blank"><Image width="200" height="200" src={mexicoimagen}></Image></a></Link>
          </div>
          <div className="img-menu">
            <Link href="https://globalreports.info/wolop/Aserlaco/1/1/1/1" ><a target="_blank"><Image width="200" height="200" src={ecuadorimagen}></Image></a></Link>
          </div>
          <div className="img-menu" >
            <Link href="https://fiweex.com/sistema/img/pdf/carta%20QR%20FINAL%2003%20SEP%202020-compressed.pdf" ><a target="_blank"><Image width="200" height="200" src={chileimagen}></Image></a></Link>
          </div>
          <div className="img-menu">
            <Link href="https://digital.adhocwifi.com/es/crepes/waffles/local"><a target="_blank"><Image width="200" height="200" src={españaimagen}></Image></a></Link>
          </div>
          <div className="img-menu">
            <Link href="https://qr.precompro.com/?vendor=crepespanama" target="_blank"><a target="_blank"><Image width="200" height="200" src={panamaimagen}></Image></a></Link>
          </div>
          <div className="img-menu">
            <Link href="https://qr.precompro.com/?vendor=crepespanama" target="_blank"><a target="_blank"><Image width="200" height="200" src={colombiaimagen}></Image></a></Link>
          </div>
        </div>
        </div>
    )
}
