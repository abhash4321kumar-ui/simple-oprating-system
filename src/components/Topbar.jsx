import React, { useEffect, useState } from 'react'

const NAV_ITEMS = ['File', 'Window', 'Edit', 'Terminal']
 
const Topbar = () => {
  const [now, setNow] = useState(new Date())
 
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
 
  const formatted = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
 
  return (
    <div className='topbar'>
      <div className='side'>
        <img src='/public/apple.png' alt='Apple' />
        {NAV_ITEMS.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className='side'>
        <img id='sideleftimg' src='/public/wifi.png' alt='WiFi' />
        <span className='topbar-time'>{formatted}</span>
      </div>
    </div>
  )
}
 

export default Topbar