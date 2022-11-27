import React, { useState } from 'react'
import  { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
//import 'react-quill/dist/quill.core.css';
import toolbar from '../utils/ToolBar';
//import 'react-quill/dist/quill.bubble.css';

const TextEditor = ({noteBody, setNoteBody}) => {

    let {quill, quillRef} = useQuill({
        modules:{
            toolbar
        },
    })

    const editor = quillRef.getEditor();
    const unprivilegedEditor = quillRef.makeUnprivilegedEditor(editor);
    // You may now use the unprivilegedEditor proxy methods
    unprivilegedEditor.getText();

    /*quill.on('text-change', function(delta, oldDelta, source) {
        if (source == 'api') {
          console.log("An API call triggered this change.");
        } else if (source == 'user') {
          console.log("A user action triggered this change.");
        }
    });*/
return (
    <div className='mt-2 mb-2'>
        <div ref={quillRef}>

        </div>
       
    </div>
)
}

export default TextEditor