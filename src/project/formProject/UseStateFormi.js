import React,{useState,useEffect} from 'react'
import './UseStateForm.css';


function UseStateFormi() {
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    contact:'',
    gender:'',
    subjects:[],
    file: null,
    url:'',
    choice: "",
    about: ""


  })
  const {firstname, lastname, email, contact,gender, subjects, file, url, choice, about} = formData;
const handleChange= (e)=>{
const {name, value, type, checked, files} = e.target;

  if(type=== 'checkbox'){
    setFormData((prevData)=> ({
      ...prevData, 
      subjects: checked ? [...prevData.subjects, value] : prevData.subjects.filter((subject)=> subject !== value)
    }))
    
  } else if(type === 'file'){
    setFormData({...formData, file: files[0]})
  }else{
    setFormData({...formData, [name]: value})
  }
  


}

useEffect(()=>{
  // console.log('update Subjects:', formData.subjects)
},[formData.subjects]);

 const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(formData);
 }
  
 
  return (
    <div>
       <form action='#' method='get' onSubmit={handleSubmit}>
        <label htmlFor='firstname'>First Name*</label>
        <input type="text" name='firstname' id='firstname' placeholder='Enter first name' required value={firstname} onChange={handleChange} />
        <label htmlFor='lastname'>Last Name</label>
        <input type="text" name='lastname' id='lastname' placeholder='Enter Last Name' required value={lastname} onChange={handleChange} />
        <label htmlFor='email'>Emial</label>
        <input type="email" name='email' id='email' placeholder='Enter Email' required value={email} onChange={handleChange} />

        <label htmlFor='contact'>Contact*</label>
        <input type="tel" name='contact' id='contact' placeholder='Enter mobile number' required value={contact} onChange={handleChange} />

        <label htmlFor='gender'>Gender*</label>
        <input type="radio" name='gender' value='male' id='male' checked= {gender === 'male'} onChange={handleChange}  /> 
        Male

        <input type="radio" name='gender' value='female' id='female' checked= {gender === 'female'} onChange={handleChange} />
        Female

        <input type="radio" name='gender' value='other' id='other' checked= {gender === 'other'} onChange={handleChange} />
        other

        <label htmlFor='lang'>your best Subject</label>
        <input type="checkbox" name='subjects' value='English' id='english' checked={subjects.includes('English')} onChange={handleChange}  />
        English

        <input type="checkbox" name='subjects' id='maths' value='Maths' checked={subjects.includes('Maths')} onChange={handleChange}  />
        Maths

        <input type="checkbox" name='subjects' id='physics' value='physics' checked={subjects.includes('physics')} onChange={handleChange} /> physics

        <label htmlFor='file'>Upload Resume*</label>
        <input type="file" name='file' id='file' placeholder='Enter Upload File' required onChange={handleChange} />

        <label htmlFor='url'>Enter URL*</label>
        <input type="url" name='url' id='url' placeholder='Enter url' required onChange={handleChange} />
        
        <label >Select your choice</label>
        <select name="choice" id='select' value={choice} onChange={handleChange} >
          <option value='' disabled >Select your ans</option>
          <optgroup label='Beginers'>
            <option value="1" >HTML</option>
            <option value="2" >css</option>
            <option value="3" >JavaScript</option>
          </optgroup>
          <optgroup label='Advance'>
            <option value="4" >React</option>
            <option value="5" >Node</option>
            <option value="6" >Express</option>
            <option value="7" >MongoDB</option>
          </optgroup>
        </select>
        <label htmlFor='about'> About</label>
        <textarea cols="30" rows="10" name='about' id='about' placeholder='about your self' required value={about} onChange={handleChange} ></textarea>
        <button type='reset' value='reset' onClick={()=>{setFormData({
          firstname:'',
          lastname:'',
          email:'',
          contact:'',
          gender:'',
          subjects:[],
          file: null,
          url:'',
          choice: "",
          about: ""
        })}}>Reset</button>
        <button type='submit' value='submit'>Submit</button>

       </form>
    </div>
  )
}

export default UseStateFormi;