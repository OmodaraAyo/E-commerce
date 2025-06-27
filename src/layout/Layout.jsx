import React from 'react'
import Header from '../components/Header'
import DetailsPage from '../components/DetailsPage'
import DressStyle from '../components/DressStyle'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import AdBanner from '../components/AdBanner'

const Layout = () => {
  return (
    <div>
        <Header/>
        <DetailsPage/>
        <AdBanner/>
        <DressStyle/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Layout
