

import React from 'react'
import{collect} from '../data'
import {slides} from '../data'
import{scrollbar} from '../data'
function Collections(){

  return (
    <div className="collections">
    <div className="collectionSection">
     {collect.map((item) => (
     <div className="card" key={item.id}>
     <img src={item.src} alt={item.name}/>
     <span className="name">{item.name}</span>
    </div>
     ))}
      </div>
      <div className="secondBanner">
      <img src="meeshoimag/secondmeeshobanner.webp" alt="banner" />
       </div>

       <div className="scrollbar">
       <div className="scrollimg">
        {scrollbar.map((item) => (
       <div className="scroll" key={item.id}>
       <img src={item.src} alt={item.src}/>
    </div>
     ))}
       </div>
      </div>

      
      <div className="thirdBanner">
      <img src="meeshoimag/thirdmeeshobanner2.jpg" alt="banner" />
       </div>

        <div className="brands">
       <div className="infiniteslides">
        {slides.map((item) => (
       <div className="slides" key={item.id}>
       <img src={item.src} alt={item.src}/>
    </div>
     ))}
     </div>
       <div className="infiniteslides">
        {slides.map((item) => (
       <div className="slides" key={item.id}>
       <img src={item.src} alt={item.src}/>
    </div>
     ))}
       </div>
       </div>
    </div>
  )
}

export default Collections


