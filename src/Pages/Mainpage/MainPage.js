import { Lexer } from 'graphql';
import React, { Component } from 'react';
import Left from '../Left/Left'
import Main from '../Main/Main'
import './MainPage.style.scss'

const MainPage=()=>{
return(
    <div className="container">
        <Left/>
        <Main/>
    </div>
)
}

export default MainPage;