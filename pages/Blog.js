import React from 'react'
import Layout from '../componentes/Layout'
import Footer from '../componentes/Footer'
import Redes from '../componentes/Redes'
import banner from "../public/banner_blog.jpg"
import Image from 'next/image'

export default function Blog() {
    return (
        <Layout>
            <div className="banner-blog">
            <Image src={banner} width="1200" height="400" priority objectFit="cover" layout="responsive" >
            </Image>
            <h1>Blog</h1>
            </div>
        </Layout>
    )
}
