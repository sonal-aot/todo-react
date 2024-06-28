import React from 'react'

const ButtonType =({ btnText, id  , displayForm , ...props}) => {
  return (
    <div>
      <button id={id} onClick={displayForm} {...props}>{btnText}</button>
    </div>
  )
}

export default ButtonType