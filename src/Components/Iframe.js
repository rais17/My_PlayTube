import React from 'react'

const Iframe = ({id}) => {
  return (
    
    <iframe
      className='w-full shadow-md rounded-xl aspect-video'
        src={`https://www.youtube.com/embed/${id}?si=8hotUVjZFQC_RXnv`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

  );
}

export default Iframe