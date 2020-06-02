import React from 'react'





const quoteGenerator = () => {
    const quote1 = <h5> People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.
– Rob Siltanen</h5>

const quote2 = <h5> Quote2 </h5>

const quote3 = <h5> Quote3 </h5>

const quote4 = <h5> Quote4 </h5>

const quote5 = <h5> Quote5 </h5>

const quote6 = <h5> Quote6 </h5>

const quote7 = <h5> Quote7 </h5>

const quote8 = <h5> Quote8 </h5>

const quote9 = <h5> Quote9 </h5>

const quote10 = <h5> Quote10 </h5>

const quote11 = <h5> Quote11 </h5>

const quote12 = <h5> Quote12 </h5>

const quote13 = <h5> Quote13 </h5>

const quote14 = <h5> Quote14 </h5>

const quote15 = <h5> Quote15 </h5>

const quote16 = <h5> Quote16 </h5>

const quote17 = <h5> Quote17</h5>

const quote18 = <h5> Quote18</h5>

const quote19 = <h5> Quote19</h5>

const quote20 = <h5> Quote20</h5>

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