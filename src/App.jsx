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
Start expanding into the next viewport (1280px-1920px)

Later!
------
Check email input sizing issue
Button color highights and animations need work
Email input needs an animated label
Language selector needs tweaks, specifically its dropdown (placement/colors)
Convert feature-divs & question-divs to a proper component
Change paragraph spacing in acordion

Check image margin/padding in "Download" feature section 
Check landing section gradient media queries

ALT tags on all images!
Check Aria mumbo jumbo
Run an HTML checker
-------------------
*/