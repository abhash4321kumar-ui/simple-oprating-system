import React from 'react'
const DOCK_ITEMS = [
  { key: 'whatsapp', className: 'whatsapp', src: '/public/whatsapp.webp', alt: 'WhatsApp', window: null },
  { key: 'calender', className: 'calender', src: '/public/calender.png', alt: 'Calendar', window: null },
  { key: 'notes',    className: 'notes',    src: '/public/notes.png',    alt: 'Notes',    window: 'notes' },
  { key: 'spotify',  className: 'spotify',  src: '/public/spotify.webp', alt: 'Spotify',  window: 'spotify' },
  { key: 'resume',   className: 'notes',    src: '/public/pdf.webp',     alt: 'Resume',   window: 'resume' },
  { key: 'terminal', className: 'terminal', src: '/public/terminal.png', alt: 'Terminal', window: 'terminal' },
  { key: 'github',   className: 'github',   src: '/public/github.png',   alt: 'GitHub',   window: 'github' },
]
 
const Bottomdocks = ({ openclose, setopenclose }) => {
  const handleOpen = (windowKey) => {
    if (!windowKey) return
    setopenclose(prev => ({ ...prev, [windowKey]: true }))
  }
 
  return (
    <div className='docksparent'>
      {DOCK_ITEMS.map(({ key, className, src, alt, window: win }) => (
        <div
          key={key}
          className={`icon ${className}`}
          onClick={() => handleOpen(win)}
          title={alt}
        >
          <img src={src} alt={alt} />
        </div>
      ))}
    </div>
  )
}

export default Bottomdocks