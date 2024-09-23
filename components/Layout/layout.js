import React from 'react'
import Header from './header'
import Footer from './footer'
import PreLoder from './preloader'

export default function Layout({children}) {
  return (
    <>
     
     <div className="wrapper">
        <Header />
      {children}
      <Footer />
      </div>
    </>
  )
}
