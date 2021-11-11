import React from 'react'
import Layout from '../componentes/Layout'
import Redes from "../componentes/Redes"
import Footer from "../componentes/Footer"
import Image from 'next/image'
import banner from '../public/banner_domicilios.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {españadomi,mexicodomi,chiledomi,ecuadordomi,panamadomi} from "../public/domicilios/index"

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
                <Image src={mexicodomi} width="150" height="220" priority objectFit="cover" layout="responsive"/>
                <h4>México</h4>
                <a href="https://pedidos.crepesywaffles.mx/">pedidos.crepesywaffles.mx</a>
                <h6>Rappi</h6>
                <h6>Ubereats</h6>
                <h6>Did food</h6>
                </div>

                <div className="img-box">
                <Image src={ecuadordomi} width="150" height="220" priority objectFit="cover" layout="responsive"/>
                <h4>Ecuador</h4>
                <a href="https://pedidos.crepesywaffles.ec/">pedidos.crepesywaffles.ec</a>
                <a href="tel:+026003420" className="call-domi"><ion-icon name="call-outline"></ion-icon>+02 600 3420</a>
                <h6>Rappi</h6>
                <h6>Ubereats</h6>
                <h6>Did food</h6>
                </div>

                <div className="img-box">
                <Image src={chiledomi} width="150" height="220" priority objectFit="cover" layout="responsive"/>
                <h4>Chile</h4>
                <h6>Rappi</h6>
                <h6>Ubereats</h6>
                </div>

                <div className="img-box">
                <Image src={españadomi} width="150" height="220" priority objectFit="cover" layout="responsive"/>
                <h4>España</h4>
                <h6>Ubereats</h6>
                <h6>Deliveroo</h6>
                <h6>Justeat</h6>
                </div>

                <div className="img-box">
                <Image src={panamadomi} width="150" height="220" priority objectFit="cover" layout="responsive"/>
                <h4>Panamá</h4>
                <spam>Solo Marbella y Twon Center</spam>
                <a href="tel:+507 60 137672" className="call-domi"><ion-icon name="call-outline"></ion-icon>+507 60 137 672</a>
                <a href="tel:+507 61 534 849" className="call-domi"><ion-icon name="call-outline"></ion-icon>+507 61 534 849</a>
                <a href="tel:+507 60 164 410" className="call-domi"><ion-icon name="call-outline"></ion-icon>+507 60 164 410</a>
                <h6>Pedidos ya</h6>
                </div>
            </div>
            <Redes/>
            <Footer/>
        </Layout>
    )
}
