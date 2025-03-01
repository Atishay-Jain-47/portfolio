import React from 'react'
import Navbar from './Componets/Navbar'
import Profile from './Componets/Profile'
import Skills from './Componets/Skills'
import Education from './Componets/Education'
import Projects from './Componets/Projects'
import Contacts from './Componets/Contacts'
import ScrollToTop from './Componets/ScrollToTop'

function App() {

  return (
    <div >
      <Navbar></Navbar>
      <Profile></Profile>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contacts></Contacts>
      <ScrollToTop></ScrollToTop>
    </div>
  )
}

export default App

