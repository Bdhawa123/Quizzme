import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import {Card, CardTitle,CardBody } from 'reactstrap';
import question from '../questions/question'; 


const AnswerBoard =({score})=>{
    console.log(question);
    return(
        <div>
            {question.map((qs)=>{
                return (<Card>
                    <CardTitle>{qs.qs}</CardTitle>
                    <CardBody>
                        <div>{qs.options[qs.answer]}</div>
                    </CardBody>

                </Card>);
            })}
        </div>
    )
}

export default AnswerBoard;