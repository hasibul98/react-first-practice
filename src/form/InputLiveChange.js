import React, { useState } from 'react';

function InputLiveChange ()
{

  let [ name, setName ] = useState( '' );
  let [ email, setEmail ] = useState( '' );
  let [ password, setPassword ] = useState( '' );
  let [ submit, setSubmit ] = useState( '' );

  const handleNameChange = ( e ) =>
  {
    setName( e.target.value );
  };
  const handleEmailChange = ( e ) =>
  {
    setEmail( e.target.value );
  };
  const handlepasswordChange = ( e ) =>
  {
    setPassword( e.target.value );
  };
  const handleSubmit = ( e ) =>
  {
    e.preventDefault();
    // console.log('form submitted');
    // console.log(name, email, password);
    setSubmit( { name, email, password } );
  };

  console.log( submit );
  return (
    <div>
      <h1>Live form data change</h1>
      <form action="" onSubmit={ handleSubmit }>
        <div>
          <label htmlFor='name'>Name:</label>
          <input value={ name } type='text' name='name' id='name' required onChange={ handleNameChange } />
        </div>
        <br />
        <div>
          <label htmlFor='email'>Email:</label>
          <input value={ email } type='email' name='email' id='email' required onChange={ handleEmailChange } />
        </div>
        <br />
        <div>
          <label htmlFor='password'>password:</label>
          <input value={ password } type='password' name='password' id='password' required onChange={ handlepasswordChange } />
        </div>
        <br />
        <div>
          <button type='submit'>Regester</button>
        </div>




      </form>
      <h1>Name:{ name }</h1>
      <h1>Email:{ email }</h1>
      <h1>Password:{ password }</h1>
      <h1>Submit: Name:{ submit.name } email: { submit.email } Password: { submit.password } </h1>
    </div>
  );
}

export default InputLiveChange;