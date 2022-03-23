import React from 'react'
import Layout from '../../componentes/Layout'
import Footer from '../../componentes/Footer'
import Redes from '../../componentes/Redes'
import banner from "../../public/banner_blog.jpg"
import Image from 'next/image'
import { useEffect,useState } from 'react'
import apiURL from "../../utils/apiURL"
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Blog() {
  
  const [articulos, setArticulos] = useState(null)
  console.log(articulos)
  useEffect(() => {
    fetch(`${apiURL}/blog-cyw-inters`)
      .then(res => { return res.json() })
      .then(res => {
      setArticulos(res)}
  )},[])
    return (
        <Layout>
            <div className="banner-blog">
            <Image src={banner} width="1200" height="400" priority objectFit="cover" layout="responsive" >
            </Image>
            <h1>Blog</h1>
            </div>
            <div className="articulos">
            {articulos && articulos.map((i)=>(
              <div className="articulos-body" key={i.id}>
                  <Link href={`Blog/${i.Titulo}`}><h2>{i.Titulo}</h2></Link>
                  <div className="image-articule"><Image src={`${apiURL}${i.Imagen.url}`} width="280" height="280" priority objectFit="cover"></Image></div>
              </div>
            ))}
            </div>
        <Redes/>
        <Footer/>
        </Layout>
    )
}
