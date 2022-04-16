import React, { useState } from 'react';
import QuizItem from './QuizItem';
import { nanoid } from 'nanoid';

export const Quiz = React.memo(({ quizzes, setScore }) => {

  return (

    <div className="questions-container">
      {quizzes.map((quiz) => <QuizItem quiz={quiz} setScore={setScore} key={nanoid()} />)}
    </div>

  )
});
