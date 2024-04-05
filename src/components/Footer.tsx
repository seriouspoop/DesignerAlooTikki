import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import img1 from '../assets/react.svg'
import './Footer.css'
function Footer() {
  return (
    <>
    <div className='search_block'>
    </div>
        <div className='footer'>
        <div className='footer_img'>
            <img src={img1}></img>
        </div>
        <div className='footer_img'>
            <img src={img1}></img>
        </div>
        <div className='footer_img1' >
            <img src={img1} ></img>
        </div>
        <div className='footer_img'>
            <img src={img1}></img>
        </div>
        <div className='footer_img'>
            <img src={img1}></img>
        </div>
    </div>
    </>

  )
}
export default Footer
