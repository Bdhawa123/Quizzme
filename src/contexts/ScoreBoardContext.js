import React,{createContext,useState} from 'react';

export const ScoreBoardContext = createContext();

const ScoreBoardContextProvider = (props) =>{
    const [score,setScore] = useState(0);

    const addScore=()=>{
        let newscore = score+1;
        setScore(newscore);
    }

    const resetScore = ()=>{
        setScore(0);
    }
    
    const decreaseScore=()=>{
        let newscore = score-1;
        if(newscore<0){
            newscore=0;
        }
        setScore(newscore);
    }

    return(
        <ScoreBoardContext.Provider value={{score,addScore,resetScore, decreaseScore}}>{props.children}</ScoreBoardContext.Provider>
    );

}

export default ScoreBoardContextProvider;

