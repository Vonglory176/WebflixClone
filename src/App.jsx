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
TODO
-------------------
Button color highights and animations need work
Email input needs an animated label
SVG coloring for arrows, plus and other need to be fixed
Weird border coloring issue with accordions
Language selector needs tweaks, specifically its dropdown (placement/colors)
*/