import React from 'react'
import {  useNavigate } from "react-router-dom";

const NoteCard = ({note}) => {

  const navigate = useNavigate();
console.log(note)

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-700">
            
            <div className="flex flex-col items-center pb-10 px-4 pt-4 ">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{note.title}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{note.dateUpdated}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <i className="bi bi-eye"></i>
                    </button>
                    <button  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                        onClick={()=> navigate(`/editnote/${note.idNote}`)} 
                    >
                        <i className="bi bi-pen"></i>
                    </button>
                </div>
            </div>
        </div>
    )



}

export default NoteCard

/*
return (
    <div classNameName='bg-gray-100 rounded-md p-4'>
    <header classNameName='flex justify-between ' >
      <h2 classNameName='text-md' >{note.title} </h2>
    </header>
    <p classNameName='text-xs' >{note.Description} </p>
    <span>{note.created} </span>
    <div classNameName='flex gap-x-2 py-2' >
      <button 
        classNameName='bg-slate-800 px-2 py-1 text-white' 
        onClick={()=> navigate(`/edit/${note.Id}`)} >
          Edit
      </button>
      <button 
        classNameName='bg-slate-800 px-2 py-1 text-white' 
        onClick={()=> navigate(`/edit/${note.Id}`)} >
          Edit
      </button>
    </div>

  </div>
  )*/