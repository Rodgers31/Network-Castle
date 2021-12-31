import React, { useState } from 'react';
import Logoimg from '../../logoImg/Layers.png';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { login } from '../../redux/actions/auth';

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from '../Signin/SigninElements.js';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const [user_name, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user_name && password) {
      dispatch(register(user_name, name, email, password))
        .then(() => {
          navigate('/login');
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      throw new Error('All fields must be entered');
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>
            <img
              // style={{ marginTop: '20%', fontSize: '10rem' }}
              src={Logoimg}
              alt=''
            />
          </Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Register your account</FormH1>
              <FormLabel htmlFor='for'>Full Name</FormLabel>
              <FormInput
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlFor='for'>Username</FormLabel>
              <FormInput
                type='text'
                id='user_name'
                name='user_name'
                value={user_name}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormButton type='submit'>Register</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Register;
