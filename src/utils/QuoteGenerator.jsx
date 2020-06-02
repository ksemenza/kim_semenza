import React from 'react'





const quoteGenerator = () => {
    const quote1 = <h2> `People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.
– Rob Siltanen`</h2>

const quote2 = <h2> `Quote2 `</h2>

const quote3 = <h2> `Quote3 `</h2>

const quote4 = <h2> `Quote4 `</h2>

const quote5 = <h2> `Quote5 `</h2>

const quote6 = <h2> `Quote6 `</h2>

const quote7 = <h2> `Quote7 `</h2>

const quote8 = <h2> `Quote8 `</h2>

const quote9 = <h2> `Quote9 `</h2>

const quote10 = <h2> `Quote10 `</h2>

const quote11 = <h2> `Quote11 `</h2>

const quote12 = <h2> `Quote12 `</h2>

const quote13 = <h2> `Quote13 `</h2>

const quote14 = <h2> `Quote14 `</h2>

const quote15 = <h2> `Quote15 `</h2>

const quote16 = <h2> `Quote16 `</h2>

const quote17 = <h2> `Quote17`</h2>

const quote18 = <h2> `Quote18`</h2>

const quote19 = <h2> `Quote19`</h2>

const quote20 = <h2> `Quote20`</h2>

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