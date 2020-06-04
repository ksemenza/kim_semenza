import React from 'react'
import QuoteGene from '../utils/QuoteGenerator';
import RestApp from '../assests/img/restaruantPass.png'
import Todo from '../assests/img/todoList.png'
import RickMorty from '../assests/img/rick.png'
import GithubImg from '../assests/img/githubImg.png'
import '../assests/css/Project.css'

const Projects = () => {

    return (


        <div>
          
        <div className='project-ctr'>
        <h1> Projects </h1>
      <div className='card-ctr'>
      <div className='two-card-ctr'>
            <div className='project-name-img-wrap'>
                <div className='title-btn-wrap'>
            
           <a className='project-name-a' href='#'> <h3>Restarunt Passport UI</h3> </a>
            <button className='project-detail-btn'>Details</button>
            </div>
            <img src={RestApp} alt='Restarunt Passport UI'/>
            </div>
            
 <div className='project-name-img-wrap card-filp'>
            <div className='title-btn-wrap'>
            <a className='project-name-a' href='#'>        <h3>To Do List</h3> </a>
            <button className='project-detail-btn'>Details</button>
            </div>
            <img src={Todo} alt='To Do List'/>
            </div>\
            </div>
</div>
        <div className='two-card-ctr'>
            <div className='project-name-img-wrap card-filp'>
            <div className='title-btn-wrap'>
            <a className='project-name-a' href='#'> <h3>Rick and Morty Fan page</h3> </a>
            <button className='project-detail-btn'>Details</button>
            </div>
            <img src={RickMorty} alt='Rick and Morty Fan Page' style={{height:'230px'}}/>
            </div>

       
            <div className='project-name-img-wrap card-filp'>
            <div className='title-btn-wrap'>
            <a className='project-name-a' href='#'> <h3>Github User Account Profile</h3></a>
            <button className='project-detail-btn'>Details</button>
            </div>
            <img src={GithubImg} style={{height:'360px'}} alt='Github User Account'/>
            </div>
            </div>
            <QuoteGene/>
        </div>
        </div>
        
    )
}

export default Projects