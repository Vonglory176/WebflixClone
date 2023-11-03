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
Now!
------
Start expanding into the next viewport (600px-959px)
Create second view for AdBanner at screen width 655px
Check for more media queries between 655px and 959px

Later!
------
Button color highights and animations need work
Email input needs an animated label
SVG coloring for arrows, plus and other need to be fixed
Weird border coloring issue with accordions
Language selector needs tweaks, specifically its dropdown (placement/colors)

Check image margin/padding in "Download" feature section 
Check landing section gradient media queries

ALT tags on all images!
Check Aria mumbo jumbo
Run an HTML checker
-------------------
*/