import React from 'react'

import './card.style.scss'
/**

**/

const Card = (props) => {
    console.log(props)
  return(
    <div className="glass" style={props.style}>
        {props.children}
    </div>
   )

 }

export default Card;