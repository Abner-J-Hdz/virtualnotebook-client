import React from 'react'

const Menu = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            <div className="flex items-center">
                <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page"><i className="bi bi-house-door mr-2"></i>Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 dark:text-white hover:underline"><i className="bi bi-journal-plus mr-2"></i>Create Task</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu