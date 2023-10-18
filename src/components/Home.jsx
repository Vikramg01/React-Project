import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
   <div className='bg-img'>
    <div className='posterhead'>
      <p>
      <i className="fa-solid fa-leaf fa-2xl leaf "></i> ORGANIC
      </p>
      <p className='pera2'>Food Market</p>
      <button className="btn btn-success btn-lg  " type="submit" ><Link className="btn2 nav-link active" aria-current="page" to="/Order">Order Now</Link></button>
    </div>

   </div>
    
    </>
  )
}

export default Home