import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            <div className="flex items-center">
                <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                    <li>
                        <Link to="/" className="text-gray-900 dark:text-white hover:underline">
                            <i className="bi bi bi-journal-text mr-2"></i>Notes
                        </Link>
                        <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page"></a>
                    </li>
                    <li>
                        <Link to={"/newnote"}  className="text-gray-900 dark:text-white hover:underline">
                            <i className="bi bi-pencil-square mr-2"></i>New note
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu