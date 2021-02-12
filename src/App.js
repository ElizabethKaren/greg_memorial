import React, { useState } from 'react'
import './App.css';
import GregPic1 from "./images/IMG_5321.PNG"
import GregPic2 from './images/IMG_5159.PNG'
import GregPic3 from './images/IMG_5160.PNG'
import GregPic4 from './images/IMG_5161.PNG'
import GregPic5 from './images/IMG_5162.PNG'
import GregPic6 from './images/IMG_5163.PNG'
import GregPic7 from './images/IMG_5164.PNG'
import GregPic8 from './images/IMG_5181.PNG'
import GregPic9 from './images/IMG_5182.PNG'
import GregPic10 from './images/IMG_5183.PNG'

function App() {
  const [pic, setPic] = useState([
    {
      image: GregPic1
    },
    {
      image: GregPic2
    },
    {
      image: GregPic3
    },
    {
      image: GregPic4
    },
    {
      image: GregPic5
    },
    {
      image: GregPic6
    },
    {
      image: GregPic7
    },
    {
      image: GregPic9
    }
  ])

  return (
    <div className="App">
      <h1>We Love Greg</h1>
      { pic.map((greg, index) => <div><br/><img src={greg.image} alt={index} width='350' height='530' /><br/></div> )}
    </div>
  );
}

export default App;
