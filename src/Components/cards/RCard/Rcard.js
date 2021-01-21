import React from 'react';
import './RCard.styles.scss'

const RCard=(props)=>{
    return(
        <div className="Container">
     {props.children}
        </div>
    )
}
export default RCard;