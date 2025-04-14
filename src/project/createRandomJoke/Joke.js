import React,{useState,useEffect} from 'react'
import Button from './Button';


const jokeStyle = {
  backgroundColor: "black",
  height: "100vh",
  width: "100%",
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
  

}

function Joke() {
  const [joke, setJoke] = useState('');
  const [isFetched, setIsFetched] = useState(false);
  
 
    const fetchApi = ()=>{
      fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
      .then((res)=> res.json())
      .then((data)=>{setJoke(data.joke)})
      .then((err)=> console.log('error',err))
    }
    useEffect(()=>{
      if(!isFetched){
        fetchApi();
        setIsFetched(true);
      }
        
    },[isFetched])
    
  
  
  
  return (
    <div className='joke' style={jokeStyle}>
      <p className='joke-width'>{joke}</p>
       <Button callApi={fetchApi} />
       
       
    </div>
  )
}

export default Joke