import React from 'react'
import { getNoteRequest } from '../api/noteApi';

const Notes = () => {

  const loadNote = async () => {
    const response = await getNoteRequest();
    //console.log(response)
    console.log(response.data)
  }

  loadNote()

  return (
    <div>Notes</div>
  )
}

export default Notes