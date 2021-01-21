import React from 'react';
import Button from '../../Components/Button/Button';
import Card from '../../Components/cards/Card';
import './Main.style.scss'

import AOS from 'aos'
const Main=(props)=>{
    AOS.init({
        offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1700, // values from 0 to 3000, with step 50ms
  easing: 'ease',
    });
    return (
        <div className="details" data-aos="fade-up">
<div className="dContainer">
<h1>Hello</h1>
<h3> i am M.kaleem web Developer</h3>
            <div className="ButtonContainer">
                
            <Button Name="Resume"/>
            <Button Name="Project" />
            </div>
            <div className="Paragraph">
                <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                 Just click “Edit Text” or double click me to add your own content and make changes to the font.<br></br>

I’m a great place for you to tell a story and let your users know a little more about you.
                </p>

            </div>
            </div>

        </div>

    )
}

export default Main;