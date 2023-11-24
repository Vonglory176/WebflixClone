import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

//https://hygraph.com/blog/routing-in-react

function App() {
  return (
    <>
      <Routes>
        <Route path="/NetflixClone" element={<HomePage/>} />
        <Route path="/NetflixClone/Login" element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default App

/*
Major breakpoints at: 600px, 960px, 1280px, 1920px

TODO
-------------------
Right now!
------
Fix email Accept/Reject colors and messages

Later!
------
Fix Header positioning in 1280px+ viewport (Bootstrap related issue)
Convert feature-divs & question-divs to a proper component

Check image margin/padding in "Download" feature section
Check landing section gradient media queries

Add Spanish translation?

ALT tags on all images!
Check Aria mumbo jumbo
Run an HTML checker
-------------------
*/