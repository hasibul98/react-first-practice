import React from 'react';
import logo from './logo.svg';
import Increement from './increement/Increement';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import InputLiveChange from './form/InputLiveChange';
import DataMaping from './mapping/DataMaping';
import UseStateForm from './form/UseStateForm';
import EventFunctionHandler from './form/EventFunctionHandler';
import Parant from './childtoparant/Parant';
import FormikBasic from './formik/FormikBasic';
import UseStateFormi from './project/formProject/UseStateFormi';
import Joke from './project/createRandomJoke/Joke';
import PasswordValidator from './project/passwordValidator/PasswordValidator';
import IpAddressFinder from './project/ipAddressFinder/IpAddressFinder';

import './index.css';

import UserForm from './userForm/UserForm';
import UserLogin from './userForm/UserLogin';
import Home from './privatPage/Home';
import PrivateRoute from './privatRouter/PrivateRoute';
import Logout from './logout/Logout';





function App ()
{
  return (
    <BrowserRouter>
      <nav>
        <Link className='navlink' to='/increment'>increement</Link>
        <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='/datamaping'>datamaping</Link>
        <Link className='navlink' to='/inputlivechange'>inputlivechange</Link>
        <Link className='navlink' to='/usestateform'>useStateForm</Link>
        <Link className='navlink' to='/eventfunctiohandler'>event function handler</Link>
        <Link className='navlink' to='/childtoparant'>childtoparant</Link>
        <Link className='navlink' to='/formikbasic'>formikbasic</Link>

        <br />
        <Link className='navlink' to='/usestateform2'>useStateform2</Link>
        <Link className='navlink' to='/randomjoke'>random joke</Link>
        <Link className='navlink' to='/passwordvalidator'>password validator</Link>
        <Link className='navlink' to='/ipaddressfinder'>ipaddressfinder</Link>

        <Link className='navlink' to='/userform'>user form</Link>
        <Link className='navlink' to='/login'>user login</Link>
        <Link className='navlink' to='/home'>home</Link>
        <Link className='navlink' to='/logout'>Logout</Link>



      </nav>
      <Routes>
        <Route path='/increment' element={ <Increement /> } />
        <Route path='/datamaping' element={ <DataMaping /> } />
        <Route path='/inputlivechange' element={ <InputLiveChange /> } />
        <Route path='/usestateform' element={ <UseStateForm /> } />
        <Route path='/eventfunctiohandler' element={ <EventFunctionHandler /> } />
        <Route path='/childtoparant' element={ <Parant /> } />
        <Route path='/formikbasic' element={ <FormikBasic /> } />
        <Route path='/usestateform2' element={ <UseStateFormi /> } />
        <Route path='/randomjoke' element={ <Joke /> } />
        <Route path='/passwordvalidator' element={ <PasswordValidator /> } />
        <Route path='/ipaddressfinder' element={ <IpAddressFinder /> } />


        <Route path='/userform' element={ <UserForm /> } />
        <Route path='/login' element={ <UserLogin /> } />
        <Route path='/home' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='/logout' element={ <Logout /> } />

      </Routes >

    </BrowserRouter >






  );
}

export default App;