import React, { useState } from 'react';
import Logoimg from '../../logoImg/LayersExs.png';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
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
} from './SigninElements';
import { Navigate } from 'react-router-dom';

const SignIn = (props) => {
  const [user_name, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user_name && password) {
      dispatch(login(user_name, password))
        .then(() => {
          props.history.push('/profile');
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      throw new Error('All fields must be entered');
    }
  };
  if (isLoggedIn) {
    return <Navigate to='/profile' />;
  }
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
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                type='text'
                id='user_name'
                name='user_name'
                value={user_name}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlFor='for'>Psssword</FormLabel>
              <FormInput
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormButton type='submit'>Log In</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
