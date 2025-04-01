import React,{Fragment} from 'react';
import Data from './Data.json'
import Card from 'react-bootstrap/Card';
import './dataMaping.css';


function DataMaping() {
       console.log(Data);
       let items = Data.map((item)=>{
              const{name, title} = item;
              return(
                     <Card className='card-container' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/79/9c/d3/799cd3f384b90983fb506e7f534dfcd9.jpg" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        
      </Card.Body>
    </Card>
              );
       });
  return (
    <Fragment>
       
              <div className='dataMapingContainer'>
                     {items}
              </div>

    </Fragment>
  )
}

export default DataMaping