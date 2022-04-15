import { useEffect, useState } from 'react';
import './App.css';
import { Opening } from './MyComponents/Opening';
import { Quiz } from './MyComponents/Quiz';
import { BallTriangle } from 'react-loader-spinner'



function App() {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

console.log(questions)
  //Calls API to get question

  const getQuestion = async (category, difficulty) => {
    
    setQuestions([]);
    setLoading(true);
    const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`);
    const data = await res.json();
    let q = 1;
    setQuestions(data.results.map((question) => (
      {
        ...question,
        qno: q++,
        answers: [...question.incorrect_answers, question.correct_answer].sort((a, b) => 0.5 - Math.random()),
      }
    )));
    setLoading(false);
    
  }
  
  const reset=()=>{
    setQuestions([]);
    setScore(0);
  }
  return (
    <main>
      {!loading && questions.length > 0 && <p className="score">Score: {score}/{questions.length}</p>}
      {loading && <BallTriangle color="#fff" />}
      {
        !loading && questions.length === 0 ?
          <Opening getQuestion={getQuestion} />
          :
          <Quiz quizzes={questions} setScore={setScore} />
      }
      {questions.length>0 && !loading && <button onClick={reset} className="reset-btn">Reset Quiz</button>}
    </main>
  );
}

export default App;
