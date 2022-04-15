import React,{useState} from 'react'
import QuizItem from './QuizItem'
import { nanoid } from 'nanoid'

export const Quiz = React.memo(({ quizzes,setScore}) => {
  console.log("Quiz.js rendered");
  
  return (
      
      <div className="questions-container">
        {quizzes.map((quiz) => <QuizItem quiz={quiz} setScore={setScore} key={nanoid()} />)}
      </div>

  )
});


// background-image: radial-gradient(circle at center center, rgba(113, 232, 206,0.1) 0%, rgba(113, 232, 206,0.1) 30%,rgba(164, 158, 146,0.1) 30%, rgba(164, 158, 146,0.1) 64%,transparent 64%, transparent 100%),linear-gradient(90deg, hsl(195,92%,51%),hsl(195,92%,51%)); background-size: 32px 32px;


// background-image: radial-gradient(circle at 85% 1%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 96%,transparent 96%, transparent 100%),radial-gradient(circle at 14% 15%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 1%,transparent 1%, transparent 100%),radial-gradient(circle at 60% 90%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 20%,transparent 20%, transparent 100%),radial-gradient(circle at 79% 7%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 78%,transparent 78%, transparent 100%),radial-gradient(circle at 55% 65%, hsla(190,0%,93%,0.05) 0%, hsla(190,0%,93%,0.05) 52%,transparent 52%, transparent 100%),linear-gradient(135deg, rgb(37, 56, 222),rgb(96, 189, 244));