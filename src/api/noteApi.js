import axios from "axios";

const urlNoteApi = process.env.REACT_APP_API_URL_NOTES

export const getNoteRequest = async () =>
    await axios.get(`${urlNoteApi}notes`);

export const getOneNoteRequest = async (idNote) => 
    await axios.get(`${urlNoteApi}notes/${idNote}`);    

export const createNoteRequest = async (note) => 
    await axios.post(`${urlNoteApi}notes`, note); 

export const updateNoteRequest = async (note) => 
    await axios.put(`${urlNoteApi}notes`, { idNote: note.idNote, title: note.title, body: note.body })  


export const updateNoteApi = async(note) => {
    try {
        const response = await axios.put('https://localhost:44347/api/notes', note);
        return response.data;        
    } catch (error) {
        console.log(error.data.message)
        return error.data.message;         
    }
    }
    