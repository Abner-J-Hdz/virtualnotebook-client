import React, { useState } from 'react'
import EditorQuill from '../components/EditorQuill';
import TextEditor from '../components/TextEditor';

const NotePage = () => {
  const [title, setTitle] = useState("");
  const [noteBody, setNoteBody] = useState("<h3>Hacer el proyecto de <strong>netFormost</strong></h3><p><em><u>abner</u></em></p>");

  const handleUpdate = (bodyValue) => {
    setNoteBody(bodyValue);



  }

const handleSubmit = (e) => {
  e.preventDefault();
console.log(e)
  const note = {
    title
  }
}

  return (
  <>
      <div className="w-300 max-w-screen-sm mr-auto ml-auto bg-white rounded shadow-lg p-4">
        <h1 className="block w-full text-center text-blue-900 mb-6 text-2xl">
          <i className="bi bi-journal-plus mr-2 text-blue-900"></i>New note
        </h1>

        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="title"  className="text-xl text-blue-900">Title</label>
            <input type="text" name='title' onChange={(e) => setTitle(e.target.value)}
            className="border-b py-1 focus:outline-none focus:border-blue-900 focus:border-b-2 transition-colors peer w-full text-blue-900" autoComplete="off"/>
          </div> 
          
          <div className='mb-6'>
            {/* <TextEditor noteBody={noteBody} setNoteBody={setNoteBody}  /> */}
            <EditorQuill noteBody={noteBody} setNoteBody={setNoteBody}  />   
          </div>
          <div className='mb-6'>
            <button type="submit" className="block bg-slate-800 px-2 py-1 w-full rounded-md text-white" >
              <i className="bi bi-plus-circle mr-2"/> 
              Save
            </button>

          </div>
        </form>
      </div>
  </>

  )
}

export default NotePage