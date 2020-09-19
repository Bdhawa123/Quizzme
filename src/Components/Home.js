import React, {useContext, useState, useEffect} from 'react'; 
import {Card,CardTitle} from 'reactstrap';
import QuizComponent from './QuizComponent';
import '../css/home.css';

import {ScoreBoardContext} from '../contexts/ScoreBoardContext';

    /* Need to create a slide and click on radio buttons to record the changes */
    /* Mechanism needs to start on this component */
    
const HomeComponent= ()=>{
    
    const {score,addScore,resetScore,decreaseScore,increaseTries,SuccessRate,successRate} = useContext(ScoreBoardContext);
    console.log('successrate'+successRate);
    
    
    return(
        <Card className='homeCard' >
            <QuizComponent addScore={addScore} resetScore={resetScore} drcScore={decreaseScore} score={score} increaseTries={increaseTries} SuccessRate={SuccessRate}/>
        </Card>
    )
}

export default HomeComponent;