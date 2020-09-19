import React,{useState,useEffect} from 'react';
import question from '../questions/question';
import {Container,Button,Modal,Card, CardBody, CardTitle} from 'reactstrap';
import { queryAllByAltText } from '@testing-library/react';
import AnswerBoard from './AnswerBoard';

    /* Decoupling of quiz component */ 

    
let attendedQlist= [];                                                // storing and removing correct answer for questions.

const QuizComponent =({addScore,resetScore,drcScore,score,increaseTries,SuccessRate})=>{
    const [Qno, setQno]=useState(0);
    const [prev, setPrev]=useState(false);                            //next previous mechanism
    const [nxt, setNxt]=useState(true);
    const [modal, setModal] = useState(false);                        //modal for showing scoreboard
    const [answerboard, setAnswerboard] = useState(false);            //answerboard
    

    let currentQuestion = question[Qno];                              // aligned to state to change on next and previous
    let options = currentQuestion.options;
    let answer = currentQuestion.answer;
    

    const qsans=(id,answer)=>{

        if(!attendedQlist.includes(Qno)){                               //mechanism for collecting answer once only 

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
        setAnswerboard(!answerboard);
        setModal(false);
        reset();
    }

    const submit = ()=>{
        increaseTries();
        console.log(question.length);
        console.log('length'+score/question.length)
        let scorePercent = score/question.length
        SuccessRate(scorePercent)
        console.log('clicked on submit');
        setModal(true);
    }

    //  Reset ScoreBoard and reset question
    const reset=()=>{
        attendedQlist.length=0;                                                         //reset array 
        setQno(0);
        resetScore();
        setPrev(false)
        setNxt(true);
        setModal(false);
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
            </div>
            :null}

            {/* Modal Component */}

                <Modal isOpen={modal}>
                    <Card>
                        <CardTitle> SCORE</CardTitle>
                            <CardBody>{score}</CardBody>
                    </Card>
                    <Button onClick={showAnswerBoard}>Show Answers</Button>                                                {/* On click trigger */}
                    <Button onClick={reset}>Restart</Button>
               
                </Modal>

            {/* Answer board */}
            {answerboard?<AnswerBoard score={score} showAnswerBoard={showAnswerBoard}/>:null}

        </div>
    )
}

export default QuizComponent;