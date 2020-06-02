import React from 'react'
import '../assests/css/QuoteGene.css'





const quoteGenerator = () => {
    const quote1 = <h5> People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do
        <br/>
~ Rob Siltanen</h5>

const quote2 = <h5> Innovation distinguishes between a leader and a follower. ~ Steve Jobs </h5>

const quote3 = <h5> QuBusiness has only two functions - marketing and innovation.
~ Milan Kundera </h5>

const quote4 = <h5> he true sign of intelligence is not knowledge but imagination.
~ Albert Einstein </h5>

const quote5 = <h5> Without change there is no innovation, creativity, or incentive for improvement. Those who initiate change will have a better opportunity to manage the change that is inevitable.
~ William Pollard </h5>

const quote6 = <h5> Our future growth relies on competitiveness and innovation, skills and productivity... and these in turn rely on the education of our people.
~ Julia Gillard </h5>

const quote7 = <h5> Every once in a while, a new technology, an old problem, and a big idea turn into an innovation.
~ Dean Kamen </h5>

const quote8 = <h5> There is no innovation and creativity without failure. Period.
~ Brene Brown </h5>

const quote9 = <h5>A dream will not become an innovation if there is no realization.

-Ciputra </h5>

const quote10 = <h5> Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse.
~ Winston Churchill </h5>

const quote11 = <h5>  For good ideas and true innovation, you need human interaction, conflict, argument, debate.
 ~ Margaret Heffernan </h5>

const quote12 = <h5> Changes call for innovation, and innovation leads to progress.
~ Li Keqiang </h5>

const quote13 = <h5>Ultimately, progress and innovation win.
Travis Kalanick </h5>

const quote14 = <h5> Exploration is the engine that drives innovation. Innovation drives economic growth.
~ Edith Widder </h5>

const quote15 = <h5> The only way you survive is you continuously transform into something else. It’s this idea of continuous transformation that makes you an innovation company.
~ Ginni Rometty </h5>

const quote16 = <h5> You can expect no influence if you are not susceptible to influence.

~ Carl Jung </h5>

const quote17 = <h5> There is only one thing stronger than all the armies of the world: and that is an idea whose time has come.

 ~ Victor Hugo</h5>

const quote18 = <h5> Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.
 ~ John Steinbeck
</h5>

const quote19 = <h5> There’s no good idea that cannot be improved on.
 ~ Michael Eisner</h5>

const quote20 = <h5> What is now proved was once only imagined.
 ~ William Blake</h5>

let randomQuotes = ''
let quotes = []

    const pickQuote = () => {
        quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11, quote12, quote13, quote14, quote15, quote16, quote17, quote18, quote19, quote20 ];
        randomQuotes = Math.floor(Math.random() * quotes.length);
        return quotes[randomQuotes];
    }


    return (
        <div>
            <div className="quote-generator">{pickQuote()}</div>
        
        </div>
    )
    
}

export default quoteGenerator