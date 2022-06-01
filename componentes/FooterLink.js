import React from 'react'
import Image from 'next/image'
import footer from "../public/Footer.jpg"


export default function FooterLinks() {
    return (
        <footer>
            <div className="footer">
            <Image src={footer} sizes="100vw"></Image>
            </div>
            <p className="text-center mb-2">©2021 Crepes & Waffles S.A | All Rights Reserved</p>
        </footer>
    )
}
