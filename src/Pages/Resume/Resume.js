import React from 'react';
import RCard from '../../Components/cards/RCard/Rcard';
import './Resume.styles.scss'
const Resume=()=>{
    return(
        <div className="MContainer">
            <div style={{width:'100%'}}>
            <a href="#Personal">Personal</a>
            <a href="#Education">Education</a>
            <a href="#Experience">Experience</a>
            <a href="#Skill">Skill</a>
            </div>
            <h1> Resume </h1>
            <h5>Personal </h5>
        <RCard>
<div className="Heading" id="Personal">
    <h1>2019-Present</h1><br></br>
    <span >JOB POSITION</span><br></br>
    <span>Company Name</span><br></br>
    <span>Location </span><br></br>
</div>
<div className="Hdetail">
<p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

I’m a great place for you to tell a story and let your users know a little more about you.
</p>
</div>
        </RCard>
        <h5>Education </h5>

        <RCard>
<div className="Heading" id="Education">
    <h1>2019-Present</h1><br></br>
    <span >JOB POSITION</span><br></br>
    <span>Company Name</span><br></br>
    <span>Location </span><br></br>
</div>
<div className="Hdetail">
<p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

I’m a great place for you to tell a story and let your users know a little more about you.
</p>
</div>
        </RCard>

        
        <RCard>
<div className="Heading">
    <h1>2019-Present</h1><br></br>
    <span >JOB POSITION</span><br></br>
    <span>Company Name</span><br></br>
    <span>Location </span><br></br>
</div>
<div className="Hdetail">
<p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

I’m a great place for you to tell a story and let your users know a little more about you.
</p>
</div>
        </RCard>    

               <RCard>
<div className="Heading">
    <h1>2019-Present</h1><br></br>
    <span >JOB POSITION</span><br></br>
    <span>Company Name</span><br></br>
    <span>Location </span><br></br>
</div>
<div className="Hdetail">
<p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

I’m a great place for you to tell a story and let your users know a little more about you.
</p>
</div>
        </RCard> 

 {/* Experine     */}
 <h5>Experience</h5>
 <RCard>
<div className="Heading" id="Skill">
    <h1>2019-Present</h1><br></br>
    <span >JOB POSITION</span><br></br>
    <span>Company Name</span><br></br>
    <span>Location </span><br></br>
</div>
<div className="Hdetail">
<p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

I’m a great place for you to tell a story and let your users know a little more about you.
</p>
</div>
        </RCard>
 <h5>Skill</h5>
 <RCard>
<div className="Heading" id="Skill">
    <h1>2019-Present</h1><br></br>
    <span >JOB POSITION</span><br></br>
    <span>Company Name</span><br></br>
    <span>Location </span><br></br>
</div>
<div className="Hdetail">
<p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

I’m a great place for you to tell a story and let your users know a little more about you.
</p>
</div>
        </RCard> 
        
        </div>
    )
}

export default Resume;