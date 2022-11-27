import React,  { useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import toolbar from '../utils/ToolBar';

const EditorQuill = ({noteBody, setNoteBody, setCounter, isNew}) => {

    ///reactQuillRef va hacer referencia a el editor para poder obtener propiedades extras como el getLength
    const [reactQuillRef , setReactQuillRef ] = useState(null)
    const maxCharacters = 100;

    const handleChange = (value) => {
        let counterLength = reactQuillRef.unprivilegedEditor.getLength();

        counterLength-= 1;
        setCounter(counterLength)

        if(counterLength <= 100 )
            setNoteBody( value );
    }

    const checkCharacterCount = (event) => {
        ///validamos que no se pase del maximo de caracteres que ya establecimos
        ///si se alcanza la longitud máxima de caracteres, onChange no se activará.
        if (reactQuillRef.unprivilegedEditor.getLength() > maxCharacters && event.key !== 'Backspace') {
            event.preventDefault();
        }
    }

    const modules = {
        toolbar
    }

    const moduleWithoutToolbar = {
        "toolbar": false
    }

    return (
        <div style={{height: "460px"}}>
            <ReactQuill
            ref={(quill) => {
                setReactQuillRef(quill)
            }}
            
            style={{ height: "400px" }}
            modules={ isNew ? modules : moduleWithoutToolbar}
            theme="snow"
            value={noteBody}
            onKeyDown={checkCharacterCount}
            onChange={handleChange}
            
        />
        </div>
    )
}

export default EditorQuill