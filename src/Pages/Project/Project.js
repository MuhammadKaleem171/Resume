import React from 'react';

import AOS  from 'aos'

import './Project.styles.scss'
import Pcard from '../../Components/cards/ProjectCard/Pcard';

const Project=()=>{
    AOS.init({
        offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease',
    });

    function aas(){
        document.getElementById("11").style.background="blue";
    }
return(
    
    <div className="PC">
        <span><h1>Projects</h1></span>
        
        <Pcard>
        <div className="lcon" data-aos="fade-right">
            <span style={{position: 'relative',
top:'10px',color:'blue'}}><h1>Project Name</h1></span>
            <span style={{fontSize:'20px'}}>Role</span>
            <div className="paragraph">
                <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
                Just click “Edit Text” or double click me to add your own content and make changes to the font.
                 I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>

        </div>
        <div className="Rcon"  data-aos="fade-left">
            <img 
            style={{width: "-moz-available",overflow:'-moz-hidden-unscrollable',height:'100%'}}
            src="https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_322,h_404,al_c,q_80,usm_0.66_1.00_0.01/Leaflet.webp"/>
        </div>
        </Pcard>

        <Pcard>
        <div className="lcon" data-aos="fade-right">
        <span style={{position: 'relative',
top:'10px',color:'blue'}}><h1>Project Name</h1></span>
            <span style={{fontSize:'20px'}}>Role</span>
            <div className="paragraph">
                <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
                Just click “Edit Text” or double click me to add your own content and make changes to the font.
                 I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
</div>
        </div>
        <div className="Rcon"  data-aos="fade-left">
        <img 
            style={{width: "-moz-available",overflow:'-moz-hidden-unscrollable',height:'100%'}}
            src="https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_322,h_404,al_c,q_80,usm_0.66_1.00_0.01/Leaflet.webp"/>
        </div>
        </Pcard>

        <Pcard>
        <div className="lcon" data-aos="fade-right"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine"
        >
             <span style={{position: 'relative',
top:'10px',color:'blue'}}><h1>Project Name</h1></span>
            <span style={{fontSize:'20px'}}>Role</span>
            <div className="paragraph">
                <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
                Just click “Edit Text” or double click me to add your own content and make changes to the font.
                 I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
                </div>

        </div>
        <div  id="11"className="Rcon"  data-aos="flip-left"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine">
         <img 
            style={{width: "-moz-available",overflow:'-moz-hidden-unscrollable',height:'100%'}}
            src="https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_322,h_404,al_c,q_80,usm_0.66_1.00_0.01/Leaflet.webp"/>     
        </div>
        </Pcard>
        
    </div>
)
}

export default Project;