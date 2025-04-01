import React from 'react';

function Child(props) {
       const appcetParant = props.onChildData('it is child')
  return (
    <div>
       {appcetParant}
    </div>
  )
}

export default Child