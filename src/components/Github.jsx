import React from 'react'
import Wrapper from "./Wrapper";
import Githubdata from "../assets/Githubdata.json";

const Github = ({ openclose, setopenclose }) => (
  <Wrapper windowname="github" title="GitHub Projects" openclose={openclose} setopenclose={setopenclose}>
    <div className='cardparent'>
      {Githubdata.map((val, index) => (
        <div key={index} className='card'>
          <img src={val.image} alt={val.title} />
          <h2>{val.title}</h2>
          <p>{val.description}</p>
          <div className='buttontags'>
            {val.tags.map((tag, i) => (
              <button key={i}>{tag}</button>
            ))}
          </div>
          <div className='buttons'>
            <a href={val.githubRepo} target='_blank' rel='noreferrer'>github</a>
            <a href={val.liveLink}   target='_blank' rel='noreferrer'>live link</a>
          </div>
        </div>
      ))}
    </div>
  </Wrapper>
)
export default Github