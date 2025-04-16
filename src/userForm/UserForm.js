import React, { useState } from 'react';
import "../index.css";
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Label = styled.label`
       width: 50px;
       color:  red;
       font-size: 20px;
       margin-right: 50px;
       
`;
const DivContainer = styled.div`
       margin: 50px;
`;
const Input = styled.input`
       margin-left: 20px;
       width: 400px;
`;
const InputDiv = styled.div`
       margin: 20px;
`;

function UserForm ()
{
       const [ user, setUser ] = useState( { fullName: "", email: '', password: '' } );

       console.log( user );
       const [ showPassword, setShowPassword ] = useState( false );

       const handleChange = ( e ) =>
       {
              setUser( { ...user, [ e.target.name ]: e.target.value } );
              console.log( user );
       };

       const toggleShowPassword = () =>
       {
              setShowPassword( !showPassword );
       };
       const navigate = useNavigate();

       const handleSubmit = async ( e ) =>
       {
              e.preventDefault();

              if ( !user.fullName || !user.email || !user.password )
              {
                     alert( "Please fill all input fields" );
                     return;
              }

              console.log( user );

              try
              {
                     const res = await axios.post( 'http://localhost:5000/api/signup', user );
                     console.log( res );
                     navigate( "/login" );
              } catch ( err )
              {
                     const errorMsg = err.response?.data?.error || "Something went wrong";
                     alert( "Error: " + errorMsg );
              }
       };

       return (
              <DivContainer>
                     <form onSubmit={ handleSubmit }>
                            <InputDiv style={ { display: "flex", flexDirection: "row" } }>
                                   <Label style={ {} } className='input-label' htmlFor='fullName'>fullName:</Label>
                                   <Input className='input-form' type="text" name='fullName' id='fullName' value={ user.fullName } onChange={ handleChange } />
                            </InputDiv>
                            <InputDiv style={ { display: "flex", flexDirection: "row" } }>
                                   <Label style={ {} } className='input-label' htmlFor='email'>email:</Label>
                                   <Input value={ user.email } className='input-form' type="email" name='email' id='email' onChange={ handleChange } />
                            </InputDiv>
                            <InputDiv style={ { display: "flex", flexDirection: "row" } }>
                                   <Label style={ {} } className='input-label' htmlFor='password'>password:</Label>
                                   <Input value={ user.password } className='input-form' type={ showPassword ? "text" : "password" } name='password' id='password' onChange={ handleChange } />
                                   <Input type="checkbox" onChange={ toggleShowPassword } checked={ showPassword } />Show Password
                            </InputDiv>
                            <InputDiv style={ { display: "flex", flexDirection: "row" } }>
                                   <button type='submit'>submit</button>

                            </InputDiv>
                     </form>
              </DivContainer>
       );
}

export default UserForm;