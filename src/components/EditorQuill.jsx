import React,  { useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import toolbar from '../utils/ToolBar';

const EditorQuill = ({noteBody, setNoteBody, setCounter, isNew, maxCharacters, disabled}) => {

    ///reactQuillRef va hacer referencia a el editor para poder obtener propiedades extras como el getLength
    const [reactQuillRef , setReactQuillRef ] = useState(null)


    const handleChange = (value) => {
        let counterLength = reactQuillRef.unprivilegedEditor.getLength();

        counterLength -= 1;
        setCounter(counterLength)

        if(counterLength <= maxCharacters ){
            setNoteBody( value );
            setCounter(counterLength)
        }
    }

    const checkCharacterCount = (event) => {
        //no permitimos el ctrl v
        if(event.keyCode === 86  && event.ctrlKey){
            event.preventDefault();
        }
                
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
        <div style={{height: "300px"}}>
            <ReactQuill
            ref={(quill) => {
                setReactQuillRef(quill)
            }}
            readOnly={disabled}
            style={{ height: "230px" }}
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