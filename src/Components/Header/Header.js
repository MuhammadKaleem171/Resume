import React from 'react';

import './Header.styles.scss'

import {NavLink} from 'react-router-dom'

const Header=()=>{
    return (
        <div className="Mainheader">

<div className="left">
    <div className='dot'></div>
    <div className="Name">
        <span>
            M.Kaleem 
        </span>
    </div>
    <div className="Field">
        <span>
            / Web Developer
        </span>
    </div>

</div>
<div className="right">
<ul>
            <li><NavLink to="/">About Me </NavLink></li>
            <li><NavLink to="/Resume">Resume </NavLink></li>   
            <li><NavLink to ="/Project">Project</NavLink></li>
            <li><NavLink to ="/Contact">Contact</NavLink></li>
        </ul>

</div>

        </div>
    )
}

export default Header;