import React, {useContext, useState, useEffect} from 'react'; 
import {Card,CardTitle} from 'reactstrap';
import QuizComponent from './QuizComponent';

import {ScoreBoardContext} from '../contexts/ScoreBoardContext';

    /* Need to create a slide and click on radio buttons to record the changes */
    /* Mechanism needs to start on this component */
    
const HomeComponent= ()=>{
    
    const {score,addScore,resetScore,decreaseScore} = useContext(ScoreBoardContext);
    
    
    return(
        <Card>
            <CardTitle>Score{score}</CardTitle>
            <QuizComponent addScore={addScore} resetScore={resetScore} drcScore={decreaseScore}/>
        </Card>
    )
}

export default HomeComponent;