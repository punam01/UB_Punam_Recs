import JoditEditor from 'jodit-react';
import React, { useRef } from 'react'
import Navbar from './Navbar';

function TextEditor({setContent}) {
    const editor=useRef(null);
    return(
        <>
        <Navbar heading="Chintanika" title="WRITE"/>
        <section className='hero-section'>
            <JoditEditor
                ref={editor}
                onChange={(content=>setContent(content))}
            ></JoditEditor>
        </section>
        </>
    );
}
export default TextEditor;