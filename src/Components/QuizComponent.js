import React,{useState,useEffect} from 'react';
import question from '../questions/question';
import {Container,Button} from 'reactstrap';
import { queryAllByAltText } from '@testing-library/react';

    /* Decoupling of quiz component */ 

    
let attendedQlist= [];                                       // storing and removing correct answer for questions.

const QuizComponent =({addScore,resetScore,drcScore})=>{
    const [Qno, setQno]=useState(0);
    let currentQuestion = question[Qno];                    // aligned to state to change on next and previous
    let options = currentQuestion.options;
    let answer = currentQuestion.answer;
 

    const qsans=(id,answer)=>{
        console.log(`ID:${id}`);
        if(id==answer){
            if(!attendedQlist.includes(Qno)){
                addScore();
                attendedQlist.push(Qno);
                console.log(attendedQlist)
            }

        }else{
            attendedQlist = attendedQlist.filter((value)=>{
                    return value!=Qno;
            });
            drcScore();
        }
    }
    

    const next=()=>{
        if(Qno<(question.length-1)){
            let nxtnum = Qno+1;
            setQno(nxtnum);

        }
        else{
            alert('No more question after');
        }
    }

    const previous=()=>{
        if(Qno>0){
            let prvnum = Qno -1;
            setQno(prvnum);
        }else{
            alert('No more question before');
        }
    }

    return(
        <div>
            {currentQuestion.qs}                                                                
            {options.map((element,id)=>{
                return(
                    <li onClick={()=>{qsans(id,answer)}}>
                        {element}
                    </li>
                )
            })
            }
            <Button onClick={previous}>Previous</Button>
            <Button onClick={next}>Next</Button>

        </div>
    )
}

export default QuizComponent;