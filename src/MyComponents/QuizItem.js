import React from 'react';
import { useState } from 'react';


const QuizItem=(props)=>{
    const { quiz,setScore} = props;

    const[selected,setSelected]=useState();
    

    const handleCheck=(answer)=>{
        if(selected===answer && selected===quiz.correct_answer)
        return "correct";
        else if(selected===answer && selected!==quiz.correct_answer)
        return "wrong";
        else if(answer===quiz.correct_answer)
        return "correct"
    }

    const handleSelect=(e)=>{
        const userSelect=e.target.value;
        setSelected(userSelect);
        if(userSelect===quiz.correct_answer){
            setScore(prevScore=>prevScore+1);

        }
    }
    console.log(" QuizItem rendered");

    return (
        <div>
            <div className="question-section">
                <p className="question-text">Q-{quiz.qno} {quiz.question}</p>
                <div className="options-set" >

                    {quiz.answers.map((answer) => (
                        <button
                            className={`singleOption ${selected &&  handleCheck(answer)}`}
                            value={answer}
                            key={answer}
                            onClick={(e)=>handleSelect(e)}
                            disabled={selected}
                        >
                            {answer}
                        </button>
                    ))}

                </div>




            </div>
        </div>
    )
}

export default QuizItem;
