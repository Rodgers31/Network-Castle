import React from 'react';
import { useSelector } from 'react-redux';
import { Container, H3 } from './MessageElement';

const RenderMessage = () => {
  const { message } = useSelector((state) => state.message);
  return (
    <>
      <Container>{message && <H3>{message}</H3>}</Container>
    </>
  );
};

export default RenderMessage;
