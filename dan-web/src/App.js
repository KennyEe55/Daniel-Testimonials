import React, { useState } from "react";
import Img1 from "./dan_testi1.jpg";
import Img2 from "./dan_testi2.jpg"
import Img3 from "./dan_testi3.jpg"
import Img4 from "./dan_testi4.jpg"
import Img5 from "./dan_testi5.jpg"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import Carousel from './components/Carousel';

function App() {
  const slides = [
    Img1, 
    Img2,
    Img3,
    Img4,
    Img5
  ]


  return (
    <main className="App">
      <div className="max-w-lg">
        <Carousel autoSlide={true}>
          {slides.map((s)=> (
            <img src={s} />
          ))}
        </Carousel>
      </div>
    </main>

  );
}

export default App;
