import React from 'react'

function Cards({ icon, title, description }) {
  return (
    
    <div className="col-lg-4" style={{padding:"40px"}}>
    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
      <div className="features-icons-icon d-flex"><i className={`${icon} m-auto text-primary`}style={{fontSize: '4rem' }}></i></div>
      <h3>{title}</h3>
      <p className="lead mb-0">{description}</p>
    </div>
    </div>
   
  )
}

export default Cards