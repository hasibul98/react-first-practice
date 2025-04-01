import React,{ useState } from "react";



function UseStateForm() {
       // let [user, setUser] = useState({name:'', email:'', password:'', submit:{name:'',email:'', password: ''}});
       let [user, setUser] = useState({name:'', email:'', password:''});
       let {name, email, password} = user;
       
       let handleNameChange = (e)=>{
              setUser({name: e.target.value, email, password});
       }
       let handleEmailChange = (e)=>{
              setUser({name, email: e.target.value, password})
       }
       let handlepasswordChange = (e)=>{
              setUser({name, email, password: e.target.value})
       }
       let [submit, setSubmit] = useState('');
       let handleSubmit = (e)=>{
              e.preventDefault();
              console.log('form submitted')
             setSubmit({name, email, password});
       }
  return (
    <div>
       <h1>Live form data change with useState</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
          <label htmlFor='name'>Name:</label>
          <input value={name} type='text' name='name' id='name' required onChange={handleNameChange} />
          </div>
          <br/>
          <div>
          <label htmlFor='email'>Email:</label>
          <input value={email} type='email' name='email' id='email' required onChange={handleEmailChange} />
          </div>
          <br/>
          <div>
          <label htmlFor='password'>password:</label>
          <input value={password} type='password' name='password' id='password' required onChange={handlepasswordChange} />
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

export default UseStateForm;