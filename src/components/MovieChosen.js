import React from 'react'

const MovieChosen = ({chosen}) => {
  const { imgLarge, title } = chosen
  const maxH = window.innerHeight / 100 * 90
  return (
    <div>
      {(typeof chosen === 'string') ? chosen : (
        <img style={{maxWidth: '100%', maxHeight: maxH}} src={imgLarge} alt={title} />
      ) }
    </div>
  )
}

export default MovieChosen
