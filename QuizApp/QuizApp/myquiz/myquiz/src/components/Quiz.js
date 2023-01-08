import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Quiz.css'
const Quiz = () => {
  return (
    <>
    <div>
      <h1>Learn Storm Pro Quizz</h1>
      <hr></hr>
      <p>Test your skills with Learn Storms' Pro Quizz.</p>
      <hr></hr>
      <br></br>
      
      <h1>The Info</h1>
      
      This quiz covers most important topics (HTML ,CSS ,Javascript ,Data Structures and Algorithms, SQL) which are crucial for anyone who is learning programming.
      It contains 30 questions, you get 10 points for each correct answer, 
      at the end of each quiz you get your total score.

     
     <div className='allQuiz'>
        <div className='eachQuiz'>
            <div className='quizName'>
                <h2>Pro Quiz</h2>
            </div>
            <div className='quizDesc'>
                <p>30 questions to test your skills</p>
            </div>
            <div>
            <Link className='sbtn' to={'eachQuiz'}>Start Quiz</Link>
            </div>
        </div>

        {/* <div className='eachQuiz'>
            <div className='quizName'>
                <h2>CSS</h2>
            </div>
            <div className='quizDesc'>
                <p>10 questions covering the basics of CSS</p>
            </div>
            <div>
            <Link className='sbtn' to=''>Start Quiz</Link>
            </div>
        </div>

        <div className='eachQuiz'>
            <div className='quizName'>
                <h2>Java</h2>
            </div>
            <div className='quizDesc'>
                <p>10 questions covering the basics of Java</p>
            </div>
            <div>
            <Link className='sbtn' to=''>Start Quiz</Link>
            </div>
        </div>

        <div className='eachQuiz'>
            <div className='quizName'>
                <h2>Python</h2>
            </div>
            <div className='quizDesc'>
                <p>10 questions covering the basics of Python</p>
            </div>
            <div>
            <Link className='sbtn' to=''>Start Quiz</Link>
            </div>
        </div> */}






     </div>



    </div>
    </>
  )
}

export default Quiz
