
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
import Redes from "../componentes/Redes"
import Menus from "../componentes/Menus"


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
            <Carousel.Item key={i.id}>
            <div className="img1">
              <Image src={`${apiURL}${i.src.url}`} width="1200" height="450" priority objectFit="cover"  layout="responsive" >
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
        <Menus/>
        <Redes/>
        <Footer />
      </Layout>
    </>
  )
}
