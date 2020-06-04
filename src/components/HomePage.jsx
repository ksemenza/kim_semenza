import React from 'react'
import QuoteGene from '../utils/QuoteGenerator';
import '../assests/css/Home.css'

const HomePage = () => {

    return (
        <div className='home-bg-img'>
        <div className='home-ctr-body'>
            <div className='name-position-ctr'>
            <h1>Kim Semenza</h1>
            <h3>Fullstack Web Developer</h3>
            </div>
            <div className='quote-btn-ctr'>
                <div className='btn-wrap'>
                <button>More info</button>
                <button>More quotes</button>
                </div>
            <QuoteGene/>
            </div>
            </div>
        </div>
    )
}

export default HomePage