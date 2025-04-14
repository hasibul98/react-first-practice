import React from 'react'
import { useFormik } from 'formik';

function FormikBasic() {
  const formik = useFormik({
    initialValues:{
      name:'',
      email: '',
      password: ''
    },
   
    onSubmit: (values, {resetForm})=>{
      // alert(JSON.stringify(values, null, 2));
      alert(values);
      console.log(values);
      resetForm('');
      
    }
  })
  
  return (
    <div>
       {/* <form action="" onSubmit={handleSubmit}> */}
       <form action="" onSubmit={formik.handleSubmit}>
          <div>
          <label htmlFor='name'>Name:</label>
          <input value={formik.values.name} type='text' name='name' id='name' required onChange={formik.handleChange} />
          </div>
          <br/>
          <div>
          <label htmlFor='email'>Email:</label>
          <input value={formik.values.email} type='email' name='email' id='email' required onChange={formik.handleChange} />
          </div>
          <br/>
          <div>
          <label htmlFor='password'>password:</label>
          <input value={formik.values.password} type='password' name='password' id='password' required onChange={formik.handleChange} />
          </div>
          <br/>
          <div>
            <button type='submit'>Regester</button>
          </div>
         
         


        </form>

    </div>
  )
}

export default FormikBasic