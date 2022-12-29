import './App.css';
import React, {useState} from 'react';
import quotes from './quotes.js';
import colorArray from './colorArray.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const element = <FontAwesomeIcon icon={faTwitter} />

function App() {

  function randomIndex(x) {
    return Math.floor(Math.random()*x.length)
  }
  const index = randomIndex(quotes)
  
  const[quote, setQuote] = React.useState(quotes[101].text)
  const[author, setAuthor] = React.useState(quotes[101].author)

  const colorIndex = randomIndex(colorArray)
  const color = colorArray[colorIndex]

  return (
    <div id="app" style={{backgroundColor: color}}>
      <div id='quote-box' >
        <h2 style={{color: color}} id='text'>{quote}</h2>
        <p style={{color: color}} id='author'>-{author}</p>
        <div className='buttons'>
          <a style={{backgroundColor: color}} href={`https://www.twitter.com/intent/tweet?text=${quote +'  -'+ author}`} id="tweet-quote">{element}</a>
          <button 
            id="new-quote" 
            style={{backgroundColor: color}} 
            onClick={()=>{
              setQuote(quotes[index].text)
              setAuthor(quotes[index].author || 'author unknown')
            }}>new quote</button>
        </div>
      </div>
      <p>by João Lapas</p>
    </div>
    
  );
}

export default App;
