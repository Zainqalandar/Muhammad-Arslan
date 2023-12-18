import React from 'react'
import './Detail.css'
import Header from '../assets/img/header.png'

function Detail() {
  return (
    <>
    <div className="blog_detail">
        <div className="header__blog">
            <img src={`${Header}`} alt="" />
        </div>
        <h1 className='header_heading'>Fluid Properties</h1>
        <div className="header_descrption">
        Fluids, whether in the form of liquids or gases, play a fundamental role in various aspects of our daily lives and industrial processes. Understanding the properties of fluids is crucial for engineers, scientists, and professionals across diverse fields. Here I aim to unravel my experience related to the essence of fluid properties, exploring their characteristics and applications in different contexts.
        </div>
    </div>
    </>
  )
}

export default Detail