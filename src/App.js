import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import Admin from './components/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path='/' element={<UserForm />} />

        <Route path='/admin' element={<Admin />} />
      </Routes>
      {/* </Router> */}
      {/* <UserForm /> */}
    </div>
  );
}

export default App;
