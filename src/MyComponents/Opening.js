import React,{useState} from 'react';
import Categories from '../Data/Categories';

export const Opening = ({ getQuestion }) => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");


  return (
    <div className="main-page">
      <h1 className="title">Quizzical</h1>
      <p className="description">Some description if needed</p>
      <div className="quiz-setting">

        <select
          name="Category"
          className="select-box"
          required
          onChange={(e) => setCategory(e.target.value)}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>Select Category</option>
          {Categories.map((category) => (
            <option key={category.value} value={category.value}>{category.category}</option>
          ))}
        </select>

        <select  name="Difficulty" defaultValue={'DEFAULT'} className="select-box" onChange={(e) => setDifficulty(e.target.value)} >
          <option value="DEFAULT" disabled>Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

      </div>
      <button onClick={() => getQuestion(category, difficulty)} className="start-btn">Start Quiz</button>
    </div>
  )
}
