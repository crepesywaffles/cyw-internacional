import React from 'react'
import Layout from '../componentes/Layout'
import Redes from "../componentes/Redes"
import Footer from "../componentes/Footer"
import Image from 'next/image'
import banner from '../public/banner_domicilios.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {españadomi,mexicodomi,chiledomi,ecuadordomi,panamadomi} from "../public/domicilios/index"
import {panamaimagen,colombiaimagen,ecuadorimagen,mexicoimagen,españaimagen,chileimagen} from "../public/menus/index"

export default function Domicilios() {
    return (
        <Layout>
            <div className="banner-domicilios">
            <Image src={banner} width="1200" height="400" priority objectFit="cover" layout="responsive" >
            </Image>
            <h2>Domicilios</h2>
            </div>
            <div className="container-domicilios">
                <div className="img-box">
                <Image src={mexicoimagen} width="200" height="180" priority objectFit="cover" layout="responsive"/>
                {/* <h4>México</h4> */}
                <br/>
                
                <a href="https://pedidos.crepesywaffles.mx/">pedidos.crepesywaffles.mx</a>
                <h6>Rappi</h6>
                <h6>Ubereats</h6>
                <h6>Didi food</h6>
                <h6>PedidosYa</h6>
                </div>

                <div className="img-box">
                <Image src={ecuadorimagen} width="200" height="180" priority objectFit="cover" layout="responsive"/>
                {/* <h4>Ecuador</h4> */}
                <br/>
                
                <a href="https://pedidos.crepesywaffles.ec/">pedidos.crepesywaffles.ec</a>
                <a href="https://api.whatsapp.com/send?phone=593991441185"  className="call-domi"><ion-icon name="logo-whatsapp"></ion-icon>+59 3991441185</a>
                <a href="tel:+59326003420" className="call-domi"><ion-icon name="call-outline"></ion-icon>+59326003420</a>
                <h6>Rappi</h6>
                <h6>Ubereats</h6>
                <h6>Didi food</h6>
                </div>

                <div className="img-box">
                <Image src={chileimagen} width="200" height="180" priority objectFit="cover" layout="responsive"/>
                {/* <h4>Chile</h4> */}
                <br/>
                <h6>Rappi</h6>
                <h6>Ubereats</h6>
                </div>

                <div className="img-box">
                <Image src={españaimagen} width="200" height="180" priority objectFit="cover" layout="responsive"/>
                {/* <h4>España</h4> */}
                <br/>
                
                <h6>Ubereats</h6>
                </div>

                <div className="img-box">
                <Image src={panamaimagen} width="200" height="180" priority objectFit="cover" layout="responsive"/>
                {/* <h4>Panamá</h4> */}
                <br/>
                
                <h6>PedidosYa</h6>
                <h6>Ubereats</h6>
                </div>
                <div className="img-box">
                <Image src={colombiaimagen} width="200" height="180" priority objectFit="cover" layout="responsive"/>
                {/* <h4>Panamá</h4> */}
                <br/>
                <a href="https://crepesywaffles.com/domicilios">Domicilios</a>
                </div>
            </div>
            <Redes/>
            <Footer/>
        </Layout>
    )
}
