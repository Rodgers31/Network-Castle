import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import ProfilePage from './pages/profile';
import SingupPage from './pages/signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SigninPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/register' element={<SingupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
