import axios from "axios";

const urlNoteApi = process.env.REACT_APP_API_URL_NOTES

export const getNoteRequest = async () =>
    await axios.get(`${urlNoteApi}notes`);

export const createNoteRequest = async (note) => 
    await axios.post(`${urlNoteApi}notes`, note); //return explicito ``
