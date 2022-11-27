import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { createNoteRequest } from '../api/noteApi';
import EditorQuill from '../components/EditorQuill';
import TextEditor from '../components/TextEditor';

const NotePage = () => {
  const [title, setTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [counter, setCounter] = useState(0)
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

const maxCharacters = 500;

const createNote = async (note) =>
{
    try {
        const response = await createNoteRequest(note)
        console.log(response)
        if(response.status === 200){
          toast.success('created Note')
          setTimeout(() => {
            navigate("/")
          }, 1000);
        }
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = (e) => {
  setDisabled(true);
  e.preventDefault();
  const note = {
    IdNote: 0,
    title,
    body: noteBody
  }
  
  createNote(note);
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
            <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} disabled={disabled}
            className="border-b py-1 focus:outline-none focus:border-blue-900 focus:border-b-2 transition-colors peer w-full text-blue-900" autoComplete="off"/>
          </div> 
          <div className='mb-1'>
            <span>{counter} / {maxCharacters}</span>
          </div>
          <div className='mb-6'>
            <EditorQuill noteBody={noteBody} setNoteBody={setNoteBody} setCounter={setCounter} maxCharacters={maxCharacters} isNew={true} disabled={disabled} />   
          </div>
          <div className='mb-6'>
            <button type="submit" className="block bg-slate-800 px-2 py-1 w-full rounded-md text-white" disabled={disabled} >
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