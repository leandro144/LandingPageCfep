import React from 'react'
import Header from '../components/Header'
import SimpleSlider from '../components/Banner'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <SimpleSlider />
        <Main />
        <div className="footer">
          <Footer />
        </div>
    </>
  )
}

export default Home