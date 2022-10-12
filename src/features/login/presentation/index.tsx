import React from 'react';
import FormLogin from './components';
import * as S from './styles';
import { makeRemoteAuthentication } from '../domain/commands/remote-authentication-factory';

const Login = (): JSX.Element => {
  return (
    <S.Container>
      <FormLogin authentication={makeRemoteAuthentication()} />
    </S.Container>
  );
};

export default Login;
