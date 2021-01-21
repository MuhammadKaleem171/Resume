import React from 'react';
import './Pcard.styles.scss'
const Pcard=(props)=>{
    return(
<div className="Pcontainer">
{props.children}
</div>
    )
}

export default Pcard;