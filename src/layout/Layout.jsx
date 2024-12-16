import React from 'react'
import Header from '../components/Header'
import DetailsPage from '../components/DetailsPage'
import DressStyle from '../components/DressStyle'
import Testimonial from '../components/Testimonial'

const Layout = () => {
  return (
    <div>
        <Header/>
        <DetailsPage/>
        <DressStyle/>
        <Testimonial/>
    </div>
  )
}

export default Layout
