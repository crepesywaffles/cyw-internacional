import React, { useEffect, useRef } from 'react'
import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'


export default function Diseño(props) {
    let menu = useRef(null)
    let navigation = useRef(null)
    
     const menuToggle = ()=>{
      menu.current.classList.toggle("active")
      navigation.current.classList.toggle("active")
    }

    return (
      <div className="layout">
      <Head>
      <title>Crepes & Waffles Internacional</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <div className="domicilios-banner"><a href="#">PIDE TU DOMICILIO DE CREPES & WAFFLES AQUÍ</a></div>
      <section>
        <header>
            <div className="toggle" onClick={menuToggle} ref={menu}></div>
            <Link href="/"><div className="brand">.</div></Link>
            <ul className="navigation" ref={navigation}>
              <li><Link href="/"><a className=""  >Inicio</a></Link></li>
              <li><Link href="/Blog"><a className=""  >Blog</a></Link></li>
              <li><a href="/Menus" className="" >Menús</a></li>
              <li><Link href="/Domicilios" ><a className="" >Domicilios</a></Link></li>
              <li><Link href="/Contacto"><a className=""  >Contacto</a></Link></li>
            </ul>
        </header>
      </section>
      <div className="children">
      {props.children}
      </div>
      </div>
    )
}
