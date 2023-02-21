import React from 'react'
import './colorcomp.css'

const Colorcomp = (props) => {
  return (
    <>
    <div className='colorcomp'>
        <div className="colorbox" style={{background: props.color}}>.</div>
        <h3>{props.code}</h3>
        <p style={{color:props.color}}>{props.color}</p>
    </div> 
    </>
  )
}

export default Colorcomp