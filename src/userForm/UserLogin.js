import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
const TopMargin = styled.div`
       margin-top: 100px;
`;
const InputDiv = styled.div`
       margin: 20px;
`;
const Form = styled.form`
       width: 500px;
       transform: translateX(50%);
`;

function UserLogin ()
{
       const [ formData, setFormData ] = useState( { email: "", password: "" } );
       const [ token, setToken ] = useState( null );
       const handleChange = ( e ) =>
       {
              const { name, value } = e.target;
              setFormData( { ...formData, [ name ]: value } );
              console.log( formData );
       };
       const navigate = useNavigate();

       const handleSubmit = async ( e ) =>
       {
              if ( !formData.email || !formData.password )
              {
                     alert( "Please fill in all fields" );
                     return;
              }
              e.preventDefault();
              try
              {
                     const response = await axios.post( 'http://localhost:5000/api/login', formData );
                     setToken( response.data.token );
                     localStorage.setItem( 'token', response.data.token );
                     alert( 'login successful' );
                     navigate( "/home" );
              } catch ( error )
              {
                     alert( "invalid credentials" );
              }
       };
       return (
              <div>
                     <TopMargin>

                     </TopMargin>
                     <Form onSubmit={ handleSubmit }>
                            <InputDiv>
                                   <input value={ formData.email } className='input-form' name='email' type="email" placeholder='Enter your email' onChange={ handleChange } />
                            </InputDiv>
                            <InputDiv>
                                   <input value={ formData.password } className='input-form' name='password' type="password" placeholder='Enter your Password' onChange={ handleChange } />
                            </InputDiv>
                            <InputDiv>
                                   <input className='input-form' type="submit" value="Login" />
                            </InputDiv>
                     </Form>

              </div>

       );
}

export default UserLogin;