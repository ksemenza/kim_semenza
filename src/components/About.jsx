import React from 'react'
import QuoteGene from '../utils/QuoteGenerator';
import '../assests/css/About.css'
import postGres from '../assests/logos/postgres.png'
import apollo from '../assests/logos/apollo.jpg'
import docker from '../assests/logos/docker.png'
import graphql from '../assests/logos/graphql.png'
import html from '../assests/logos/html.png'
import jslogo from '../assests/logos/jslogo.png'
import knex from '../assests/logos/knex.png'
import nodeJS from '../assests/logos/nodeJS.png'
import npm from '../assests/logos/npm.png'
import prisma from '../assests/logos/prisma.png'
import react from '../assests/logos/reactlogo.png'
import redux from '../assests/logos/redux-logo.png'

const About = () => {

    return (
        <div>
            <div className='tech-about-wrap'>
            <h2> Technologies </h2>
            <div className='tech-img-wrap'>



            </div>
            </div>


            <QuoteGene/>

        </div>
    )
}

export default About