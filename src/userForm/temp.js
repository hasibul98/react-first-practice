// App.jsx বা যেখানে Route গুলো ডিফাইন করেছো
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './UserLogin';
import Home from './Home';
import PrivateRoute from './PrivateRoute';

function App ()
{
       return (
              <Router>
                     <Routes>
                            <Route path="/login" element={ <UserLogin /> } />
                            <Route
                                   path="/"
                                   element={
                                          <PrivateRoute>
                                                 <Home />
                                          </PrivateRoute>
                                   }
                            />
                     </Routes>
              </Router>
       );
}

export default App;



// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ( { children } ) =>
{
       const token = localStorage.getItem( 'token' );

       if ( !token )
       {
              return <Navigate to="/login" />;
       }

       return children;
};

export default PrivateRoute;
