import React from 'react'

const Seperator = (color) => {
  return (
    <div>
       <hr
      className="mx-5 "
      style={{
        borderColor: {color},
        opacity: 0.25,
      }}
    />
    </div>
  )
}

export default Seperator
