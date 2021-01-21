import React, { Component } from 'react';
import Card from '../../Components/cards/Card';
import './Left.style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import AOS  from 'aos'

export default class Left extends Component{
    constructor(){
        super();
        AOS.init({
            offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease',
        });

    }

render(){
    return (
        <div className="left" >
            <div className="Main" data-aos="flip-left"> 
            <Card>
                <div className="avatar">
                    <img src={require('../../assets/imgs/MKaleem.jpg').default}/>
                </div>
                <div className="Text1">
                    <span>Muhammad </span><br/>
                    <span>kaleem </span>
                    </div>
                    <div className="line">
                    </div>
                    <span className="text2">Web developer </span>               
            </Card>
            <div className="social"> 
            <div>
        <nav className="headerMenu">
        <a href="https://www.facebook.com/malikkaleem438/"
 >
  <FontAwesomeIcon icon={faFacebook} size="4x" />
</a>
<a href="https://twitter.com/malikkaleem438" >
  <FontAwesomeIcon icon={faTwitter} size="4x" />
</a>
<a href="https://www.instagram.com/malikkaleem438/"
  >
  <FontAwesomeIcon icon={faInstagram} size="4x" />
</a>
        </nav>
        </div>

</div> 
            </div>
        
        </div>
    )
}
}