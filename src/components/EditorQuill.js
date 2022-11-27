import React,  { useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import toolbar from '../utils/ToolBar';
const EditorQuill = ({noteBody, setNoteBody}) => {

const [reactQuillRef , setReactQuillRef ] = useState(null)

    const editorElement = useRef();

    const handleChange = (value) => {
        console.log(value);
        ///getText()
        setNoteBody( value );

        console.log(reactQuillRef.unprivilegedEditor.getLength())
    }

    const modules = {
        toolbar
    }

  return (
    <div style={{height: "460px"}}>
        <ReactQuill
         ref={(quill) => {
            setReactQuillRef(quill)
          }}
        style={{ height: "400px" }}
        modules={modules}
        theme="snow"
        value={noteBody}
        onChange={handleChange}
        
      />
    </div>
  )
}

export default EditorQuill