import React from 'react'

const MovieChosen = ({chosen}) => {
  const { imgLarge, title } = chosen
  return (
    <div>
      {(typeof chosen === 'string') ? chosen : (
        <img style={{maxWidth: "100%"}} src={imgLarge} alt={title} />
      ) }
    </div>
  )
}

export default MovieChosen
