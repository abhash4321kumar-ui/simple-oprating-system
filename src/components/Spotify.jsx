import React from 'react'
import Wrapper from "./Wrapper";

const Spotify = ({ openclose, setopenclose }) => (
  <Wrapper windowname="spotify" title="Spotify" openclose={openclose} setopenclose={setopenclose}>
    <div className='spotify-div'>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      />
    </div>
  </Wrapper>
)

export default Spotify