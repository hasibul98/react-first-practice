import React,{useState} from 'react';
import validator from 'validator'

function PasswordValidator() {
       console.log(validator);
       const[errorMessage, setErrorMessage] = useState('');
       const validate = (value)=>{
              if(validator.isStrongPassword(value, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1} )){
                     setErrorMessage('is Strong Password')
              }  else { 
			setErrorMessage('Is Not Strong Password') 
		} 
       }
  return (
    <div>
              <pre>
                     <h2>Checking Password Strength in ReactJS</h2>
                     <span>Enter Password: </span>
                     <input type='text' onChange={(e)=>validate(e.target.value)} />
                     <br/>
                     {
                            errorMessage === '' ? null : <span>
                                   {
                                          errorMessage
                                   }
                            </span>
                     }

              </pre>
    </div>
  )
}

export default PasswordValidator