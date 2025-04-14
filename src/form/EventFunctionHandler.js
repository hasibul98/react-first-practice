import React, { useState } from 'react'

function EventFunctionHandler() {
       const [user, setUser] = useState({name:'', email:'', password:''})
       const{name, email, password} = user;
       const[submit, setSubmit] = useState('');
       const handleChange = (e)=>{
              const filedName = e.target.name;
              if(filedName === 'name'){
                     setUser({name: e.target.value, email, password});
              }else if(filedName === 'email'){
                     setUser({name, email: e.target.value, password});
              }
              else if(filedName === 'password'){
                     setUser({name, email, password: e.target.value});
              }
             
       }
       const handleSubmit = (e)=>{
              e.preventDefault();
              setSubmit({name, email, password});
       }
  return (
    <div>
       <h1>Live form data change with useState</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
          <label htmlFor='name'>Name:</label>
          <input value={name} type='text' name='name' id='name' required onChange={handleChange} />
          </div>
          <br/>
          <div>
          <label htmlFor='email'>Email:</label>
          <input value={email} type='email' name='email' id='email' required onChange={handleChange} />
          </div>
          <br/>
          <div>
          <label htmlFor='password'>password:</label>
          <input value={password} type='password' name='password' id='password' required onChange={handleChange} />
          </div>
          <br/>
          <div>
            <button type='submit'>Regester</button>
          </div>
         
         


        </form>

        <h1>Name: {name}</h1>
        <h1>Emial: {email}</h1>
        <h1>Password: {password}</h1>
        <h1>Submit: Name: {submit.name} email: {submit.email} password: {submit.password} </h1>
    </div>
  )
}

export default EventFunctionHandler