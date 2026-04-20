import React, { useState } from 'react'
import Bottomdocks from './components/Bottomdocks'
import Topbar from './components/Topbar'
import Github from './components/Github'
import Notes from './components/Notes'
import Remuse from './components/Remuse'
import Spotify from './components/Spotify'
import Terminalfile from './components/Terminalfile'

const App = () => {

  const [openclose, setopenclose] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    terminal: false
  })

  return (
    <div>
      <Topbar />

      {openclose.github ? <Github windowname='github' openclose={openclose} setopenclose={setopenclose} /> : ''}

      {openclose.notes ? <Notes windowname='notes' openclose={openclose} setopenclose={setopenclose}  /> : ''}

      {openclose.resume ? <Remuse windowname='resume' openclose={openclose} setopenclose={setopenclose}  /> : ''}

      {openclose.spotify ? <Spotify windowname='spotify' openclose={openclose} setopenclose={setopenclose}  /> : ''}

      {openclose.terminal ? <Terminalfile windowname='terminal' openclose={openclose} setopenclose={setopenclose}  /> : ''}

      <Bottomdocks openclose={openclose} setopenclose={setopenclose} />
    </div>
  )
}

export default App