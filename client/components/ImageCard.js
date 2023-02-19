import React from 'react'

const ImageCard = ({imageSrc}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={imageSrc} alt="fjf" className="w-full"/>
    </div>
  )
}

export default ImageCard