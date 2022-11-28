import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { updateNoteRequest, getOneNoteRequest } from '../api/noteApi';
import EditorQuill from '../components/EditorQuill';
import TextEditor from '../components/TextEditor';
import axios from "axios";

const NoteEditPage = () => {
  
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [counter, setCounter] = useState(0)
  const [disabled, setDisabled] = useState(false);
  const maxCharacters = 500;

  const getNote = async () => {
    const response = await getOneNoteRequest(params.id);
    let note = response.data;

    setTitle(note.title)
    setNoteBody(note.body)

  }

  useEffect(() => {
      getNote()
  }, [])

  const updateNote = async (note) => {
      console.log(note)
      const response = await updateNoteRequest(note)
      console.log(response)
  }


  const handleSubmit = (e) => {
    setDisabled(true);
    e.preventDefault();

    if(!title || !noteBody){
      setDisabled(false);
      toast.error("Title and note body is required!")
      return;
    }

    const note = {
      idNote: parseInt(params.id),
      title,
      body: noteBody
    }

    toast.promise(updateNoteRequest(note), {
        loading: 'Loading',
        success: 'Note updated',
        error: 'Error when fetching',
    }).then((data)=>{
      console.log(data)
        if(data.status === 200){
          setTimeout(() => {
            navigate("/")
          }, 2500);
        }
    }).catch((error)=>{
      console.log(error)
      setDisabled(false);
    })
  }

  return (
  <>
      <div className="w-300 max-w-screen-sm mr-auto ml-auto bg-white rounded shadow-lg p-4">
        <h1 className="block w-full text-center text-blue-900 mb-6 text-2xl">
        <i className="bi bi-pen mr-2 text-blue-900"></i>Edit note
        </h1>

        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="title"  className="text-xl text-blue-900">Title</label>
            <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} disabled={disabled}
            className="border-b py-1 focus:outline-none focus:border-blue-900 focus:border-b-2 transition-colors peer w-full text-blue-900" autoComplete="off"/>
          </div> 
          <div className='mb-1'>
            <span>{counter} / {maxCharacters}</span>
          </div>
          <div className='mb-6'>
            <div style={{height:'300px'}}> 
              <EditorQuill noteBody={noteBody} setNoteBody={setNoteBody} setCounter={setCounter} maxCharacters={maxCharacters} isNew={true} disabled={disabled} />   
            </div>
          </div>
          <div className='mb-6'>
            <button type="submit" className="block bg-slate-800 px-2 py-1 w-full rounded-md text-white" disabled={disabled} >
              <i className="bi bi-plus-circle mr-2"/> 
              Update
            </button>
          </div>
        </form>
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

export default NoteEditPage