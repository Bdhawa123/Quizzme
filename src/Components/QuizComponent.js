import React,{useState,useEffect} from 'react';
import question from '../questions/question';
import {Container,Button,Modal,Card, CardBody, CardTitle} from 'reactstrap';
import { queryAllByAltText } from '@testing-library/react';
import AnswerBoard from './AnswerBoard';

    /* Decoupling of quiz component */ 

    
let attendedQlist= [];                                       // storing and removing correct answer for questions.

const QuizComponent =({addScore,resetScore,drcScore,score})=>{
    const [Qno, setQno]=useState(0);
    const [prev, setPrev]=useState(false);                  //next previous mechanism
    const [nxt, setNxt]=useState(true);
    const [modal, setModal] = useState(false);                //modal for showing scoreboard
    const [answerboard, setAnswerboard] = useState(false);  //answerboard
    

    let currentQuestion = question[Qno];                    // aligned to state to change on next and previous
    let options = currentQuestion.options;
    let answer = currentQuestion.answer;
 

    const qsans=(id,answer)=>{

        if(!attendedQlist.includes(Qno)){                   //mechanism for collecting answer once only 

            if(id==answer){
                attendedQlist.push(Qno);
                addScore();
            }
        }else{
            if(id!=answer){
                drcScore();
                attendedQlist = attendedQlist.filter((value)=>{
                  return value!=Qno;
                });
            }
        }
        
        next();
    }

    const showAnswerBoard=()=>{
        setAnswerboard(true);
        setModal(false);
    }

    const submit = ()=>{
        console.log('clicked on submit');
        setModal(true);
    }

    const reset=()=>{
        setQno(0);
        resetScore();
        setPrev(false)
        setNxt(true);
    }
    

    const next=()=>{

        if((Qno+2)==question.length) {
            setNxt(false);
        }else{
            setPrev(true);
        }

        if(Qno<(question.length-1)){
            let nxtnum = Qno+1;
            setQno(nxtnum);

        }
        else{
            alert('No more question after');
        }
    }

    const previous=()=>{
        if((Qno-1)==0){
            setPrev(false);
        }else{
            setNxt(true);
        }
        if(Qno>0){
            let prvnum = Qno -1;
            setQno(prvnum);
        }else{
            alert('No more question before');
        }
    }

    return(
        <div>
            {/* Question anser mechanism */}
            {(!answerboard)?
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
                {prev?<Button onClick={previous}>Previous</Button>:null}
                {nxt?<Button onClick={next}>Next</Button>:null}
                {(!nxt)?<Button onClick={submit}>Submit</Button>:null}
                <Button onClick={reset}>Reset</Button>


                <Modal isOpen={modal}>
                    <Card>
                        <CardTitle> SCORE</CardTitle>
                            <CardBody>{score}</CardBody>
                    </Card>
                                                                                        {/* Score board */}
                    <Button onClick={showAnswerBoard}>Show Answers</Button>                                                {/* On click trigger */}
                    
                </Modal>
            </div>
            :null}

            {/* Answer board */}
            {answerboard?<AnswerBoard score={score} />:null}

        </div>
    )
}

export default QuizComponent;