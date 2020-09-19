import React, {Component, useContext, useEffect, useState} from 'react';  
import {Card} from 'reactstrap' ;
import '../css/profile.css';

import {ScoreBoardContext} from '../contexts/ScoreBoardContext';
    /* Need to create a slide and click on radio buttons to record the changes */
    /* Mechanism needs to start on this component */
    
const ProfileComponent= ()=>{
    const {tries,successRate} = useContext(ScoreBoardContext);
    useEffect(()=>{
        console.log(tries);
    })

    return(
        <div className='profile'>
            <div className='profileContent'>
                <h4>Success Rate:</h4>
                    <h6>{successRate}</h6>
                <h4>No of Tries:</h4>
                    <h6>{tries}</h6>
            </div>
        </div>
    )
}

export default ProfileComponent;