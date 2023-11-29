import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

//https://hygraph.com/blog/routing-in-react

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
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

Later!
------
(Login Page)
Fix email input differences
Change login "Remember me" checkbox styling
Change footer text/link content
Change footer language selector styling
Fix footer margin

(Home Page)
Fix email Accept/Reject colors and messages
Fix email input issue where input text clashes with label when not in focus
Fix Header positioning in 1280px+ viewport (Bootstrap related issue)
Convert feature-divs & question-divs to a proper component
Check image margin/padding in "Download" feature section
Check landing section gradient media queries

(General)
Add Spanish translation?
Check Aria stuff
-------------------
*/