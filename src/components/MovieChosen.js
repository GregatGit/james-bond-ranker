import React from 'react'

const MovieChosen = ({chosen}) => {
  const { imgLarge, title } = chosen
  return (
    <div>
      {(typeof chosen === 'string') ? chosen : (
        <img src={imgLarge} alt={title} />
      ) }
    </div>
  )
}

export default MovieChosen
