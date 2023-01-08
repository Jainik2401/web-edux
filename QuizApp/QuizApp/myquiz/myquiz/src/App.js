import './App.css';
import {createBrowserRouter,
        RouterProvider,
        BrowserRouter as Router,
        Route,
        Routes,
        Outlet,
        Navigate, } from 'react-router-dom'

/** import components */

import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import EachQuiz from './components/EachQuiz';
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<div>Root Element</div>
//   },
//   {
//     path:'/quiz',
//     element:<div>Quiz Component</div>
//   },
//   {
//     path:'/result',
//     element:<div>result </div>
//   },
// ])
function App() {
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Router>
        <Routes>
          <Route path='/' element=<Main></Main>/>
          <Route path='/quiz' element=<Quiz></Quiz>/>
          <Route path='/result' element=<Result></Result>/>
          <Route path='/quiz/eachQuiz' element=<EachQuiz></EachQuiz>/>
        </Routes>
      </Router>
    </>
  );
}

export default App;



