import React from 'react'
import Header from './Header'
import Menu from './Menu'

const Layout = ({ children }) => {
  return (
    <div>
        <Header/>
        <Menu/>
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            {children}
        </div>
    </div>
  )
}

export default Layout