import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">

                <Link to="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Notebook Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Virtual Notebook</span>
                </Link>
                <div className="flex items-center">

                </div>
            </div>
        </nav>
  )
}

export default Header