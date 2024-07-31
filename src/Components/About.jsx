import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import t3 from '../Images/t3.png'
import a1 from '../Images/a1.png'

export default function About() {
  return (
   <>
   <Header/>
   <div className='bg-red-400'>
    <img className='p-12 ' src={a1} style={{width:"80%", height:"500px", margin:"auto"}}/>
   </div>
   <Footer/>
   </>
  )
}
