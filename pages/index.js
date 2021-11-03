import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../componentes/Layout'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "../public/Banner-Antrho.png"
import {mexicomenu,ecuadormenu,chilemenu,españamenu,panamamenu} from "../public/menus/index"
import Link from 'next/link'
import Footer from "../componentes/Footer"


export default function Home() {
  return (
    <>
    <Layout>
      <Carousel>
        <Carousel.Item>
          <div className="img1">
          <Image src={banner} width="1200" height="720" layout="responsive" >
          </Image>
          </div>
          <Carousel.Caption className="caption-carousel">
          <h4>Hallo<br/>IceCream</h4>
          <p>Arma tu Dulce Halloween con nuestro kit para disfrutar en casa.</p>
          <Link href="#"><button>Ver Más</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 className="title-menu mt-5">Menús</h2>
      <div className="d-flex justify-content-center flex-wrap">
      <div className="img-menu">
      <Link href="#"><Image  src={mexicomenu}></Image></Link>
      </div>
      <div className="img-menu">
      <Link href="#"><Image  src={ecuadormenu}></Image></Link>
      </div>
      <div className="img-menu" >
      <Link href="#"><Image src={chilemenu}></Image></Link>
      </div>
      <div className="img-menu">
      <Link href="#"><Image src={españamenu}></Image></Link>
      </div>
      <div className="img-menu">
      <Link href="#"><Image src={panamamenu}></Image></Link>
      </div>
      </div>

      <h4 className="title-menu2 mt-5 mb-3">Visita nuestras redes sociales</h4>
      <div className="container-social mb-5">
      <div className="social">
      <p>México</p>
      <div className="social_icon d-flex">
      <li><a href="https://www.facebook.com/matuaromaterapia"><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href="https://www.instagram.com/matuaromaterapia/"><ion-icon name="logo-instagram"></ion-icon></a></li>
      </div>
      </div>
      <div className="social">
      <p>Ecuador</p>
      <div className="social_icon d-flex">
      <li><a href="https://www.facebook.com/matuaromaterapia"><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href="https://www.instagram.com/matuaromaterapia/"><ion-icon name="logo-instagram"></ion-icon></a></li>
      </div>
      </div>
      <div className="social">
      <p>Chile</p>
      <div className="social_icon d-flex">
      <li><a href="https://www.facebook.com/matuaromaterapia"><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href="https://www.instagram.com/matuaromaterapia/"><ion-icon name="logo-instagram"></ion-icon></a></li>
      </div>
      </div>
      <div className="social">
      <p>España</p>
      <div className="social_icon d-flex">
      <li><a href="https://www.facebook.com/matuaromaterapia"><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href="https://www.instagram.com/matuaromaterapia/"><ion-icon name="logo-instagram"></ion-icon></a></li>
      </div>
      </div>
      <div className="social">
      <p>Panamá</p>
      <div className="social_icon d-flex">
      <li><a href="https://www.facebook.com/matuaromaterapia"><ion-icon name="logo-facebook"></ion-icon></a></li>
      <li><a href="https://www.instagram.com/matuaromaterapia/"><ion-icon name="logo-instagram"></ion-icon></a></li>
      </div>
      </div>
      </div>
      <Footer/>
    </Layout>
    </>
  )
}
