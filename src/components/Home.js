import React from 'react'
import Navbar from './Navbar'
import myimg from '../img/pp.jpeg'

const home = () => {
  return (
    <div > 
        <Navbar />

<div >
<img  className="bg-contain bg-center" src={myimg} alt=""/>
      </div>

    </div>
  )
}

export default home
