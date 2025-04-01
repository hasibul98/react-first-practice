import React from 'react'
import Child from './Child'
function Parant() {
       const handleChildData = (childData)=>{
              return (
                     <h1>{childData}</h1>
              );
       }
  return (
    <div>
       <Child onChildData = {handleChildData} />
    </div>
  )
}

export default Parant