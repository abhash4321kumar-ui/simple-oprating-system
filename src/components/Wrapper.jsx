import React, { useState } from 'react'
import { Rnd } from "react-rnd";

const DEFAULT_WINDOW = { x: 60, y: 55, width: 680, height: 420 }
 
const Wrapper = ({ children, windowname, setopenclose, title }) => {
  const handleClose = () =>
    setopenclose(prev => ({ ...prev, [windowname]: false }))
 
  return (
    <Rnd
      default={DEFAULT_WINDOW}
      minWidth={360}
      minHeight={240}
      bounds="window"
      dragHandleClassName="wrappertop"
    >
      <div className='wrapperparent'>
        <div className='wrappertop'>
          <div className='wrapperbuttons'>
            <button className='button1' onClick={handleClose} title="Close" />
            <button className='button2' title="Minimize" />
            <button className='button3' title="Maximize" />
          </div>
          <div className='wrappertext'>
            {title || windowname || 'window'}
          </div>
        </div>
        <div className='wrapperbottom'>
          {children}
        </div>
      </div>
    </Rnd>
  )
}
 
export default Wrapper