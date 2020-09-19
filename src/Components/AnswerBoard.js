import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import {Card, CardTitle,CardBody,Button,Col } from 'reactstrap';
import question from '../questions/question'; 

import '../css/answerboard.css';


const AnswerBoard =({score,showAnswerBoard})=>{
    console.log(question);
    return(
        <div>
            <div className='ansContainer'>
                {question.map((qs)=>{
                    return (
                        <Card className='cardContain'>
                            <CardTitle><h4>{qs.qs}</h4></CardTitle>
                            <CardBody>
                                <div><h5>{qs.options[qs.answer]}</h5></div>
                            </CardBody>
                        </Card>
                    );
                })}
                
            </div>
            <div className='endAnsBoard'>
            <Button color="primary" onClick={showAnswerBoard}>Restart Quiz</Button>
            </div>
        </div>
    )
}

export default AnswerBoard;