import React from 'react'
import QuoteGene from '../utils/QuoteGenerator';
import RestApp from '../assests/img/restaruantPass.png'
import Todo from '../assests/img/todoList.png'
import RickMorty from '../assests/img/rick.png'
import GithubImg from '../assests/img/githubImg.png'

import '../assests/css/Projects.css'

const Projects = () => {

    return (
        <div className='project-ctr'>

{/* Front-Side Card 1 */}
        <div className='card-two-wrap top'>      
            <div className='project-name-img-wrap side-front'>
            <h3>Restarunt Passport UI</h3>
            <div className='card-ctr'>
            <img src={RestApp} alt='Restarunt Passport UI'/>
            </div>
            </div>

{/* Back-Side Card 1             */}
        <div className='card-two-wrap top back-side1'>      
            <div className='card-ctr side-back'>
          <h4>Details </h4>
          <p>Technology</p>
          <p>Features</p>
          <p>Features</p>
            </div>



{/* Front-Side Card 2 */}

<div className='card-two-wrap bottom'>
            <div className='project-name-img-wrap card-ctr'>
            <h3>To Do List</h3>
            <img src={Todo} alt='To Do List'/>
            </div>
            </div>
{/* Back-Side Card 2 */}       
            <div className='project-name-img-wrap card-ctr side-front'>
            <h3>Rick and Morty Fan page</h3>
            <img src={RickMorty} alt='Rick and Morty Fan Page' style={{height:'230px'}}/>
            </div>

       
            <div className='project-name-img-wrap card-ctr side-front'>
            <h3>Github User Account Profile</h3>
            <img src={GithubImg} style={{height:'360px'}} alt='Github User Account'/>
            </div>
            </div>
            </div>

            
            <QuoteGene/>
        </div>
        
    )
}

export default Projects