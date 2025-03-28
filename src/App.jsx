import React from 'react'
import Home from './Home'
import BenefitCard from './components/BenefitCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import BenefitsSection from './components/BenefitCard'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      {/* <Home/> */}
      {/* <BenefitCard/> */}
      {/* <Footer/> */}
      <Navbar/>
      <Landing/>
      <BenefitsSection/>
      {/* <Card/> */}
    </div>
  )
}

export default App