
import Image from 'next/image'

import Layout from '../componentes/Layout'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import banner from "../public/Banner-Antrho.png"
import { mexicomenu, ecuadormenu, chilemenu, españamenu, panamamenu } from "../public/menus/index"
import Link from 'next/link'
import Footer from "../componentes/Footer"
import { useEffect, useState } from 'react'
import apiURL from "../utils/apiURL"


export default function Home() {
  const [banners, setBanners] = useState(null)
  useEffect(() => {
    fetch(`${apiURL}/banner-paises`)
      .then(res => { return res.json() })
      .then(res => {
      setBanners(res)}
  )},[])
  console.log(banners && banners.map((i)=>(i.src.url)))
  
  return (
    <>
      <Layout>
        <Carousel touch interval={3000}>
          {banners && banners.map((i)=>(
            <Carousel.Item>
            <div className="img1">
              <Image src={`http://www.portaldeartesanos.com${i.src.url}`} width="1200" height="500" priority objectFit="cover" layout="responsive" >
              </Image> 
            </div>
            <Carousel.Caption className="caption-carousel">
              <h4>{i.title}</h4>
              <p>{i.description}</p>
              <Link href={i.href}><button>Ver Más</button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
        </Carousel>

        <h2 className="title-menu mt-5">Menús</h2>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="img-menu">
            <Link href="#"><Image src={mexicomenu}></Image></Link>
          </div>
          <div className="img-menu">
            <Link href="#"><Image src={ecuadormenu}></Image></Link>
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
        <Footer />
      </Layout>
    </>
  )
}
