import React, { useEffect, useState } from 'react'
import Wrapper from "./Wrapper";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
 
const Notes = ({ openclose, setopenclose }) => {
  const [markdowndata, setMarkdowndata] = useState(null)
 
  useEffect(() => {
    fetch('/publicdata/Notesdata.txt')
      .then(res => res.text())
      .then(setMarkdowndata)
      .catch(() => setMarkdowndata('// Error loading notes'))
  }, [])
 
  return (
    <Wrapper windowname="notes" title="Notes" openclose={openclose} setopenclose={setopenclose}>
      <div className='notesparent'>
        {markdowndata
          ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdowndata}</SyntaxHighlighter>
          : <p>Loading...</p>
        }
      </div>
    </Wrapper>
  )
}
 
export default Notes