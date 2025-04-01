import React from 'react'

function Button(props) {
  return (
    <div>
              <button className='jokeButton' onClick={props.callApi}>click to generate a joke</button>
    </div>
  )
}

export default Button