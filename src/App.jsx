import { useState } from 'react'
import Header from './components/header.jsx'
import Landing from './components/Landing.jsx'
import AdBanner from './components/AdBanner.jsx'
import FeaturesAndQuestions from './components/FeaturesAndQuestions.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header/>
      <Landing/>
      <AdBanner/>
      <FeaturesAndQuestions/>
      <Footer/>
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
Fix email issues

Later!
------
Fix email Accept/Reject colors and messages
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