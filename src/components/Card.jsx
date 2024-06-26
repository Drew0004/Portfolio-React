import React, { Children } from 'react'
const Card = ({name, descrtiption, img}) => {
  let ciao = 'ciao fra!'
  return (

    <div className="card" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 style={{ 
            textTransform: 'uppercase',
            }} className="card-title my-text-try">{name}</h5>
            <p className="card-text">{descrtiption}</p>
            <a onClick={()=> alert('bottone premuto')} href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>

  )
}

export default Card


