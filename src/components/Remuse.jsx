import React from 'react'
import resumePDF from '../assets/resume.pdf'
import Wrapper from './Wrapper'
 
const Remuse = ({ openclose, setopenclose }) => (
  <Wrapper windowname="resume" title="Resume" openclose={openclose} setopenclose={setopenclose}>
    <div className='remuse'>
      <iframe
        src={`${resumePDF}#toolbar=0&scrollbar=0`}
        frameBorder="0"
        title="Resume"
      />
    </div>
  </Wrapper>
)

export default Remuse