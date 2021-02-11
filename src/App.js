import React, { useState } from 'react'
import './App.css';

function App() {
  const [pic, setPic] = useState([
    {
      image: './images/IMG_5159.PNG'
    },
    {
      image: './images/IMG_5160.PNG'
    },
    {
      image: './images/IMG_5161.PNG'
    },
    {
      image: './images/IMG_5162.PNG'
    },
    {
      image: './images/IMG_5163.PNG'
    },
    {
      image: './images/IMG_5164.PNG'
    },
    {
      image: './images/IMG_5181.PNG'
    },
    {
      image: './images/IMG_5182.PNG'
    },
    {
      image: './images/IMG_5183.PNG'
    }
  ])

  console.log(pic)
  return (
    <div className="App">
      <h1>We Love Greg</h1>
      <img src='./images/IMG_5321.PNG' alt='greg' />
      { pic.map((greg, index) => <img src={greg.image} alt={index} /> )}
    </div>
  );
}

export default App;
