import React,{Fragment,useState, useRef} from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './increement.css';


function Increement() {
      const [count, setCount] = useState(0); 
      const intervalRef = useRef(null);

      let handleIncrement = ()=>{
              setCount((prevCount)=> prevCount + 1);
      }
      let handleDecrement = ()=>{
              setCount((prevCount)=> prevCount > 0 ? prevCount - 1: 0);
      }
      const startAutoIncrement = ()=>{
              if(!intervalRef.current){
                     intervalRef.current = setInterval(handleIncrement, 200);
              }
      }
      const stopAutoIncrement = ()=>{
              clearInterval(intervalRef.current);
              intervalRef.current = null;
      }
      const startAutoDecrement = ()=>{
        if(!intervalRef.current){
                intervalRef.current = setInterval(handleDecrement, 200)
        }
       
      }
      const stopAutoDecrement = ()=>{
              clearInterval(intervalRef.current);
              intervalRef.current = null;
      }
      

  return (
       <Fragment>
              <div className='increement-body'>
                     <h1>increement Project</h1>
              <div className='count-container'>
                     <div className='count'>
                            <h1>{count}</h1>
                     </div>
                     
            <Container className='container' style={{width:'100%'}}>
                     <Row  style={{width:'100%'}}>
                            <Col className='col-button' style={{width:'100%', display:'flex'}} >
                            <button onMouseDown={startAutoIncrement} onMouseUp={stopAutoIncrement} onMouseLeave={stopAutoIncrement}  className='button' onClick={handleIncrement}><FaPlus /></button>

                            <button onMouseDown={startAutoDecrement} onMouseUp={stopAutoDecrement} onMouseLeave={stopAutoDecrement} className='button' onClick={handleDecrement}><FaMinus /></button>
                            </Col>
                            
                     </Row>
             </Container>
              </div>

              </div>
              
       </Fragment>
       
  )
}

export default Increement