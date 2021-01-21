import React from 'react';
import './Button.styles.scss'


import { useHistory } from "react-router-dom";


const Button=(props)=>{
    
const n=props.Name;
console.log(n)
const cl= n ==="Project" ? "btn1":"btn";
console.log(cl)
const history = useHistory();
return(
    
<div className={cl} onClick={()=>history.push(`/${props.Name}`)}>
    <span> {props.Name} </span>
</div>
)
}
export default Button;