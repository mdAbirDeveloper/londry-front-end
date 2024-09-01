import React from 'react'
import Navber from '../components/Shaired/navber'
import Footer from '../components/Shaired/footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navber />
        {children}
        <Footer />
    </div>
  )
}

export default Layout