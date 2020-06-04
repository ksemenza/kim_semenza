import React from 'react'
import QuoteGene from '../utils/QuoteGenerator';
import RestApp from '../assests/img/restaruantPass.png'
import Todo from '../assests/img/todoList.png'
import RickMorty from '../assests/img/rick.png'
import GithubImg from '../assests/img/githubImg.png'

const Projects = () => {

    return (
        <div>
      
            <div className='project-name-img-wrap'>
            <h3>Restarunt Passport UI</h3>
            <img src={RestApp} alt='Restarunt Passport UI'/>
            </div>

            <div className='project-name-img-wrap'>
            <h3>To Do List</h3>
            <img src={Todo} alt='To Do List'/>
            </div>


            <div className='project-name-img-wrap'>
            <h3>Rick and Morty Fan page</h3>
            <img src={RickMorty} alt='Rick and Morty Fan Page' style={{height:'230px'}}/>
            </div>

       
            <div className='project-name-img-wrap'>
            <h3>Github User Account Profile</h3>
            <img src={GithubImg} style={{height:'360px'}} alt='Github User Account'/>
            </div>
            <QuoteGene/>
        </div>
        
    )
}

export default Projects