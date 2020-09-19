import React,{createContext,useState} from 'react';

export const ScoreBoardContext = createContext();

const ScoreBoardContextProvider = (props) =>{
    const [score,setScore] = useState(0);
    const [tries,setTries] =useState(0);
    const [successRate,setsuccessRate] = useState(0);

    const addScore=()=>{
        let newscore = score+1;
        setScore(newscore);
    }

    const resetScore = ()=>{
        setScore(0);
    }

    const increaseTries = ()=>{
        setTries((tries+1));
    }

    const SuccessRate=(rate)=>{
        if(successRate==0){
            setsuccessRate(rate)
        }else{
            let calculate = (successRate+rate)/2
            setsuccessRate(calculate);
        }
        console.log(successRate);
    }
    
    const decreaseScore=()=>{
        let newscore = score-1;
        if(newscore<0){
            newscore=0;
        }
        setScore(newscore);
    }

    return(
        <ScoreBoardContext.Provider value={{score,addScore,resetScore, decreaseScore, increaseTries,SuccessRate,successRate,tries}}>{props.children}</ScoreBoardContext.Provider>
    );

}

export default ScoreBoardContextProvider;

