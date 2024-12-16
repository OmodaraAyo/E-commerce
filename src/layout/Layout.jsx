import React from 'react'
import Header from '../components/Header'
import DetailsPage from '../components/DetailsPage'
import DressStyle from '../components/DressStyle'

const Layout = () => {
  return (
    <div className=''>
        <Header className="relative"/>
        <DetailsPage className="relative"/>
        <DressStyle className="relative"/>
    </div>
  )
}

export default Layout
