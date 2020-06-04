import React from 'react'
import QuoteGene from '../utils/QuoteGenerator';
import RestApp from '../assests/img/restaruantPass.png'
import Todo from '../assests/img/todoList.png'
import RickMorty from '../assests/img/rick.png'
import GithubImg from '../assests/img/githubImg.png'
import '../assests/css/Project.css'

import '../assests/css/Projects.css'

const Projects = () => {

    return (
<<<<<<< HEAD


        <div>
                  <h1> Projects </h1>

        <div className='project-ctr'>
      <div className='card-ctr'>
      <div className='two-card-ctr'>
            <div className='project-name-img-wrap'>
                <div className='title-btn-wrap'>
            <h3>Restarunt Passport UI</h3>
            <button className='project-detail-btn'>Details</button>
            </div>
            <img src={RestApp} alt='Restarunt Passport UI'/>
            </div>
            
 <div className='project-name-img-wrap card-filp'>
            <div className='title-btn-wrap'>
            <h3>To Do List</h3>
            <button className='project-detail-btn'>Details</button>
            </div>
            <img src={Todo} alt='To Do List'/>
            </div>\
            </div>
</div>
        <div className='two-card-ctr'>
            <div className='project-name-img-wrap card-filp'>
            <div className='title-btn-wrap'>
=======
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
>>>>>>> 426e2e1c7076b6f461e41e4e34a62c8f0d7c6730
            <h3>Rick and Morty Fan page</h3>
            <button className='project-detail-btn'>Details</button>
            </div>
            <img src={RickMorty} alt='Rick and Morty Fan Page' style={{height:'230px'}}/>
            </div>

       
<<<<<<< HEAD
            <div className='project-name-img-wrap card-filp'>
            <div className='title-btn-wrap'>
=======
            <div className='project-name-img-wrap card-ctr side-front'>
>>>>>>> 426e2e1c7076b6f461e41e4e34a62c8f0d7c6730
            <h3>Github User Account Profile</h3>
            <button className='project-detail-btn'>Details</button>
            </div>
            <img src={GithubImg} style={{height:'360px'}} alt='Github User Account'/>
            </div>
            </div>
<<<<<<< HEAD
=======
            </div>

            
>>>>>>> 426e2e1c7076b6f461e41e4e34a62c8f0d7c6730
            <QuoteGene/>
        </div>
        </div>
        
    )
}

export default Projects