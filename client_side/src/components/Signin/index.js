import React, { useState } from 'react';
import Logoimg from '../../logoImg/LayersExs.png';
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

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const person = { email, password };
      setPeople((people) => {
        return [...people, person];
      });
      setEmail('');
      setPassword('');
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
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                type='email'
                id='email'
                name='email'
                value={email}
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
