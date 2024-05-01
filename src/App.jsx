import { useState } from 'react'
import Login from './Components/Login'
import SignIn from './Components/SignIn'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import Section5 from './Components/Section5'
import {FaqContainer,FaqBox} from './Components/FaqContainer'
import Footer from './Components/Footer'
import Header from './Components/Header'
import TopSection from './Components/TopSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/> */}
      {/* <SignIn/> */}
      <TopSection/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <FaqContainer/>
      <Footer/>
    </>
  )
}

export default App
