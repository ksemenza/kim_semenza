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
import sqlite from '../assests/logos/sqlite_logo.png'

const About = () => {

    return (
        <div className='about-ctr'>

           <h1>Skills </h1>

            <div className='tech-about-wrap'>
            
            <div className='tech-img-wrap'>
      

                <div className='logo-row'>         <h3 className='tech-title'>Front-End
                    <span></span></h3>
   
                    <div className='logo-img-ctr'>
            <img className='tech-logo-img' src={html}/>
            <img className='tech-logo-img' src={jslogo}/>
            <img className='tech-logo-img' src={nodeJS}/>
            <img className='tech-logo-img' src={npm}/>
                <img className='tech-logo-img' src={react}/>
                <img className='tech-logo-img' src={redux}/>
                </div>
                <h4 className='tech-stack-list'>HTML ~ CSS ~ JavaScript ~ Js Node ~ Npm ~ React ~ Redux</h4>
                </div>
           
                <div className='logo-row'>
                <h3>Back-End <span>
                </span></h3>
                
                <div className='logo-img-ctr'>
                <img className='tech-logo-img' src={sqlite}/>
                <img className='tech-logo-img' src={postGres}/>
                <img className='tech-logo-img' src={knex}/>
                
                <img className='tech-logo-img' src={prisma}/>
                <img className='tech-logo-img' src={apollo}/>
                <img className='tech-logo-img' src={docker}/>
                <img className='tech-logo-img' src={graphql}/>
                </div>
                <h4 className='tech-stack-list'>Sqlite ~ PostGres ~ Knex ~ Prisma ~ Apollo ~ Docker ~ GraphQL</h4>
            </div>
            </div>

            
            </div>

            <h1> Resume </h1>

        </div>
    )
    
}

export default About