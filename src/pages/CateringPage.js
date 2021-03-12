import React from 'react'
import { Contact, HeroImage, OurServices } from '../components'
import catering from '../assets/catering.png'

export default function ContactPage() {
    return (
        <div>
        <HeroImage img={catering}/>
        <Contact subTitle ="Inquire for your next event"/>

        </div>
    )
}
