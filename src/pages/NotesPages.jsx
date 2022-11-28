import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { getNoteRequest } from '../api/noteApi';
import NoteCard from '../components/NoteCard';

const Notes = () => {

  const [notes, setNotes] = useState([])
  const [noteBackup, setNoteBackup] = useState([])
  const [filter, setFilter] = useState("")
  const [filterBy, setFilterBy] = useState(1)
  const [orderBy, setOrderBy] = useState(1)

  const loadNote = async () => {
    const response = await getNoteRequest();
    
    setNotes(response.data)
  
  }

  useEffect(() => {
    loadNote()
  }, [])


  
  ///filter
  const handleFilter = (e)  => {
    e.preventDefault();
    console.log(notes)

    if(filter){
      setNoteBackup(notes)
      setNotes(notes.filter(note => note.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || note.body.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ))
      renderNotes(false)
    }else{
      loadNote()
    }
  }

  const handleFilterBy = (e) => {
  
    if(filterBy == 1){
      loadNote();
      setNoteBackup(notes)
      setNotes(notes.sort((a,b) => new Date(a.updated)  - new Date(b.updated)))
      console.log(notes)
      renderNotes(false)
    }else{

      setNoteBackup(notes)
      setNotes(notes.sort((a,b) => a.title.localeCompare(b.title)))
      renderNotes(false)
    }
  }

  function renderNotes(isFilter){
    if(isFilter){
      if(noteBackup.length == 0)
        return <h1>No notes!!!</h1>
      return noteBackup.map((note) =>(<NoteCard note={note} key={note.idNote} />))
    }else{
      if(notes.length == 0)
          return <h1>No notes yet!!!</h1>
      return notes.map((note) =>(<NoteCard note={note} key={note.idNote} />))
    }
  }


  return (
    <>
      <div className="w-300 max-w-screen-sm mr-auto ml-auto bg-white rounded shadow-lg p-4">
        <h1 className="block w-full text-center text-blue-900 mb-6 text-2xl">
          <i className="bi bi-journal-text mr-2 text-blue-900"></i>Notes
        </h1>

        <form className="mb-4" onSubmit={handleFilter}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search"
              value={filter}
              onChange={(e)=> setFilter(e.target.value)}
             className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg focus:ring-blue-500 dark:focus:border-blue-900 focus:border-blue-500 dark:placeholder-gray-400 ring-blue-500 border-blue-500" placeholder="Search Mockups, Logos..." />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
        </form>

        <div className='grid grid-cols-3 gap-2 py-3'> 
          <div>
            <label className="block mb-2 text-sm font-medium ">Filter by:</label>
            <select onChange={e => setFilterBy(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value={1} defaultValue>Fecha</option>
              <option value={2}>Title</option>
            </select>
          </div>
          {/* <div>
            <label  className="block mb-2 text-sm font-medium ">Order:</label>
            <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value={1} defaultValue>Asc</option>
              <option value={2}>Desc</option>
            </select>
          </div> */}
          <div className='text-center'>
            <label  className="block mb-2 text-sm font-medium ">Filter:</label>
            <button 
              onClick={handleFilterBy}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 py-2">
            {renderNotes(false)}
        </div>
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              className: '',
              duration: 3000,
              style: {
                background: '#1724c9',
                color: '#fff',
              },

              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
        />
      </div>
    </>
  )
}

export default Notes