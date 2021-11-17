import React from 'react'
import Layout from '../../componentes/Layout'
import Footer from "../../componentes/Footer"
import Redes from "../../componentes/Redes"
import { useRouter } from 'next/dist/client/router'
import { useState,useEffect } from 'react'
import apiURL from "../../utils/apiURL"
import Image from 'next/image'

export default function Blog() {
    const router = useRouter()
    console.log(router.query.blog)

    const [articulos, setArticulos] = useState(null)
    console.log(articulos)
    useEffect(() => {
        fetch(`${apiURL}/blog-cyw-inters?Titulo_eq=${router.query.blog}`)
        .then(res => { return res.json() })
        .then(res => {
        setArticulos(res)}
    )})
    return (
        <Layout>
            <div>
                {articulos && articulos.map((i)=>(
                    <div key={i.id}>
                    <Image src={`${apiURL}${i.Imagen.url}`} width="1200" height="450" priority objectFit="cover" layout="responsive" >
                    </Image>
                    </div>
                ))}
                {articulos && articulos.map((i)=>(
                    <div className="articulo" key={i.id}>
                        <h1>{i.Titulo}</h1>
                        <spam>{new Date(`${i.created_at}`).toLocaleString()}</spam>
                        <p dangerouslySetInnerHTML={{__html: i.Articulo}} />
                    </div>
                ))}
            </div>
            <Redes/>
            <Footer/>
        </Layout>
    )
}
