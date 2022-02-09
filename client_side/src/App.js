import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import ProfilePage from './pages/profile';
import SingupPage from './pages/signup';
import { clearMessage } from './redux/actions/message';
import { history } from './components/Helpers/history';

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage());
    });
  });
  return (
    <Router history={history}>
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
